const express = require("express")
const Favhindi = require("../models/Favhindi.model")
const router = express.Router();
//post request

router.post("", async (req, res) => {

    const favhindi = await Favhindi.create(req.body)

    return res.status(201).send({ favhindi })

})

//get request

router.get("", async (req, res) => {
    const favhindi = await Favhindi.find().lean().exec()

    return res.status(200).send({ favhindi })
})


//patch requests

router.patch("/:id", async (req, res) => {
    const favhindi = await Favhindi.findByIdAndUpdate(req.params.id, req.body)

    return res.status(200).send({ favhindi })
})

module.exports = router