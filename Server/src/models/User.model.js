const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    user: { type: String, required: false },
    prime_status: { type: Boolean, required: false ,default:false}
},
    {
        versionKey: false,
        timestamps: true
    })
const User = mongoose.model("user", userSchema)
module.exports = User