const mongoose = require("mongoose")
const { MongoClient } = require('mongodb');

const connect = () => {
     return mongoose.connect(`mongodb+srv://discovery:discovery@cluster0.fu30w.mongodb.net/Discovery`)
}

module.exports = connect;