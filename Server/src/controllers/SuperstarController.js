const express = require("express")
const Superstar = require("../models/Superstar.model")
const router = express.Router();
//post request

router.post("", async (req, res) => {

    const superstar = await Superstar.create(req.body)

    return res.status(201).send({ superstar })

})

//get request

router.get("", async (req, res) => {
    const superstar = await Superstar.find().lean().exec()

    return res.status(200).send({ superstar })
})

module.exports = router