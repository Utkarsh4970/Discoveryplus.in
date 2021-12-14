const mongoose = require("mongoose")
const superstarSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image_url: { type: String, required: true },
},
    {
        versionKey: false,
        timestamps: true
    })

const Superstar = mongoose.model("superstar", superstarSchema)

module.exports = Superstar