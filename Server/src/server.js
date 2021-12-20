const express = require("express")
const connect = require("./config/db")
//rewire for signup
const { parse } = require("path");
const crypto = require('crypto');
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();
//
const app = express()
app.use(express.json())
const port = process.env.PORT || 3535;
///code for siginin
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const smsKey = process.env.SMS_SECRET_KEY;
const client = require('twilio')(accountSid  ,authToken);
//const JWT_AUTH_TOKEN = process.env.JWT_AUTH_TOKEN;
const cors = require('cors');
//let refreshTokens = [];
app.use(cookieParser());
app.use(cors({origin:'https://discoveryplusclone-vishal-patil.vercel.app'}))
/******************* Send OTP **************/
app.post('/sendOTP',(req,res)=>{
    const phone = req.body.phone;
    console.log(phone)
    const otp = Math.floor(100000+ Math.random()*900000);
    const ttl = 2*60*1000;
    const expires = Date.now() +ttl;
    const data = `${phone}.${otp}.${expires}`
    const hash = crypto.createHmac('sha256',smsKey).update(data).digest("hex");
    const fullhash = `${hash}.${expires}`;
    client.messages.create({
        body:`Your One Time Password (OTP) for Sign-In is ${otp}`,
        from:+12348039855,
        to:phone
    }).then((messages)=>
    messages
    )
    .catch((err)=>
   err)
     res.status(200).send({phone,hash:fullhash,otp})
})
/************************* Verify router ******************/
app.post("/verifyOTP", (req,res)=>{
    const phone = req.body.phone;
    const hash  = req.body.hash;
    const otp = req.body.otp;
    let [hashValue,expires] = hash.split(".");
    let now  = Date.now()
    if(now>parseInt(expires)){
        return res.status(504).send({msg:"Timeout please try again!"})
    }
    const data = `${phone}.${otp}.${expires}`;
    const newCalculatedHash = crypto.createHmac('sha256',smsKey).update(data).digest('hex')
    if(newCalculatedHash === hashValue){
        res.status(202).send({msg:`Device Verified`})
    }else{
        return res.status(400).send({verification:false,msg:"Incorrect OTP"})
    }
})

//controllers
const BestController = require("./controllers/BestController")
const FavhindiController = require("./controllers/FavhindiController")
const showloveController =require("./controllers/ShowloveController")
const FavtamilController = require("./controllers/FavtamilController")
const FreestreamController = require("./controllers/FreestreamController")
const IndioriginController =require("./controllers/IndiaoriginController")
const SuperstarController =require("./controllers/SuperstarController")
const newlyaddedController =require("./controllers/NewlyaddedController")
const UserController =require("./controllers/UserController")
app.use("/user", UserController )
app.use("/Superstar", SuperstarController )
app.use("/Newlyadded", newlyaddedController )
app.use("/Favtamil", FavtamilController)
app.use("/Freestream", FreestreamController )
app.use("/Indiorigin", IndioriginController )
app.use("/best", BestController)
app.use("/Favhindi", FavhindiController )
app.use("/showlove", showloveController )
app.listen(port, async () => {
    await connect();
    console.log(`listening to ${port}`)
})