const passport = require("passport");
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const User = require("../models/users.model");
const {v4: uuidv4} = require("uuid");
require("dotenv").config();

const {newToken} = require("../controllers/auth.controller");

passport.use(new GoogleStrategy({

    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/google/callback",
    
    passReqToCallback   : true

  },

  async function(request, accessToken, refreshToken, profile, done) {
  
    const email = profile?._json?.email;

    let user;
    try{

      user = await User.findOne({email}).lean().exec();

      if(!user){

        user = await User.create({

          name:profile?._json?.name,
          email:email,
          password:uuidv4()
        })
      }
      
      const token = newToken(user);

      return done(null, {user,token});

    }catch(err){

      console.log("err",err)
    }
  }
));

module.exports = passport;