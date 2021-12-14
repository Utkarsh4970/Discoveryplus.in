const express = require("express")
const Newlyadded= require("../models/Newlyadded.model")
const router = express.Router();
//post request

router.post("", async (req, res) => {

    const newlyadded= await Newlyadded.create(req.body)

    return res.status(201).send({ newlyadded})

})

//get request

router.get("", async (req, res) => {
    const newlyadded= await Newlyadded.find().lean().exec()

    return res.status(200).send({ newlyadded})
})


//patch requests

router.patch("/:id", async (req, res) => {
    const newlyadded= await Newlyadded.findByIdAndUpdate(req.params.id, req.body)

    return res.status(200).send({ newlyadded})
})

module.exports = router