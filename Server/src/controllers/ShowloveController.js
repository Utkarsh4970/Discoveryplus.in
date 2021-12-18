const express = require("express")
const Showlove = require("../models/Showlove.model")
const router = express.Router();
//post request

router.post("", async (req, res) => {

    const showlove = await Showlove.create(req.body)

    return res.status(201).send({ showlove })

})

//get request

router.get("", async (req, res) => {
    const showlove = await Showlove.find().lean().exec()

    return res.status(200).send({ showlove })
})
router.get("/:id", async (req, res) => {
    const showlove = await Showlove.find({$text:{$search: req.params.id}}).lean().exec()
    return res.status(200).send({ showlove })
})


//patch requests

router.patch("/:id", async (req, res) => {
    const showlove = await Showlove.findByIdAndUpdate(req.params.id, req.body)

    return res.status(200).send({ showlove })
})

module.exports = router