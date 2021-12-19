const mongoose = require("mongoose")
const { MongoClient } = require('mongodb');
require("dotenv").config()
const connect = () => {
     return mongoose.connect(`mongodb+srv://${process.env.DATABASE}:${process.env.PASSWORD}@cluster0.fu30w.mongodb.net/Discovery`)
}

module.exports = connect;