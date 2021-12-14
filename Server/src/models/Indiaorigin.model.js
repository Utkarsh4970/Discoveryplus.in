const mongoose = require("mongoose")
const indiaoriginSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image_url: { type: String, required: true },
    description: { type: String, required: true },
    prime: { type: Boolean, default: false },
    likestatus: { type: Boolean, default: false },
    newstatus: { type: Boolean, default: false },
},
    {
        versionKey: false,
        timestamps: true
    })

const Indiaorigin = mongoose.model("indiaorigin", indiaoriginSchema)

module.exports = Indiaorigin