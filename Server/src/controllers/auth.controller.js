const User = require("../models/users.model");
const jwt = require("jsonwebtoken");

require("dotenv").config();

// function for create a new token
const newToken = (user)=>{

    return jwt.sign({user},process.env.JWT_SECRETE_KEY );
}

//function for sign up a new user

const signUp = async(req,res)=>{

    try{
        
        let user;

        // fetch the user from database by email because we have to chack that user is aleady exist ,
        user =  await User.findOne({email:req.body.email});
        
        // if yes then throw the error 
        if(user) return res.status(400).send({message:"email is already in use"});
        
        //else we will create the user with the provided details wich is required 
        //but before saving the user details hash the password
        user = await User.create(req.body);

        //we will create a token 
        const token = newToken(user);

        //send the token to frontend
        return res.status(200).send({user,token});

    }catch(err){

        return res.status(500).send({message: "Sorry for inconvenience please try again later"});
    }
};

//function for sign-in the user
const signIn = async(req,res) => {

    try{

        let user;

        //check if user is already exist or not if not throw the error
        user = await User.findOne({email:req.body.email});
        
        if(!user)return res.status(400).send({message:"user is not registred"});

        //if user exists then match the password if not match throw the error
        let match = user.checkPassword(req.body.password);

        if(!match) return res.status(400).send({message:"wrong password"});
        
        //if matched then create a new token for user
        const token = newToken(user);
        
        //send the token to frontend
        return res.status(200).send({user,token});

    }catch(err){
        
        return res.status(500).send({message: "Sorry for inconvenience please try again later"});
    }
};

module.exports = {signIn, signUp,newToken};