const express = require("express")
const Freestream = require("../models/Freestream.model")
const router = express.Router();
//post request

router.post("", async (req, res) => {

    const freestream = await Freestream.create(req.body)

    return res.status(201).send({ freestream })

})

//get request

router.get("", async (req, res) => {
    const freestream = await Freestream.find().lean().exec()

    return res.status(200).send({ freestream })
})


//patch requests

router.patch("/:id", async (req, res) => {
    const freestream = await Freestream.findByIdAndUpdate(req.params.id, req.body)

    return res.status(200).send({ freestream })
})

module.exports = router