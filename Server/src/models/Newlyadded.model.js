const mongoose = require("mongoose")
const newlyaddedSchema = new mongoose.Schema({
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

const Newlyadded = mongoose.model("newlyadded", newlyaddedSchema)

module.exports = Newlyadded