const express = require("express")
const Favtamil = require("../models/Favtamil.model")
const router = express.Router();
//post request

router.post("", async (req, res) => {

    const favtamil = await Favtamil.create(req.body)

    return res.status(201).send({ favtamil })

})

//get request

router.get("", async (req, res) => {
    const favtamil = await Favtamil.find().lean().exec()

    return res.status(200).send({ favtamil })
})


//patch requests

router.patch("/:id", async (req, res) => {
    const favtamil = await Favtamil.findByIdAndUpdate(req.params.id, req.body)

    return res.status(200).send({ favtamil })
})

module.exports = router