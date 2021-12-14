const express = require("express")
const Indiaorigin = require("../models/Indiaorigin.model")
const router = express.Router();
//post request

router.post("", async (req, res) => {

    const indiaorigin = await Indiaorigin.create(req.body)

    return res.status(201).send({ indiaorigin })

})

//get request

router.get("", async (req, res) => {
    const indiaorigin = await Indiaorigin.find().lean().exec()

    return res.status(200).send({ indiaorigin })
})


//patch requests

router.patch("/:id", async (req, res) => {
    const indiaorigin = await Indiaorigin.findByIdAndUpdate(req.params.id, req.body)

    return res.status(200).send({ indiaorigin })
})

module.exports = router