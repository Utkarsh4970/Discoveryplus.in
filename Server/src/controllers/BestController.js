const express = require("express")
const Best = require("../models/Best.model")
const router = express.Router();
//post request

router.post("", async (req, res) => {

    const best = await Best.create(req.body)

    return res.status(201).send({ best })

})

//get request

router.get("", async (req, res) => {
    const best = await Best.find().lean().exec()

    return res.status(200).send({ best })
})


//patch requests

router.patch("/:id", async (req, res) => {
    const best = await Best.findByIdAndUpdate(req.params.id, req.body)

    return res.status(200).send({ best })
})

module.exports = router