const express = require("express")
const User = require("../models/User.model")
const router = express.Router();
//post request
router.post("", async (req, res) => {
    const user = await User.create(req.body)
    return res.status(201).send({ user })
})
//get request
router.get("", async (req, res) => {
    const user = await User.find().lean().exec()
    return res.status(200).send({ user })
})
router.get("/:id", async (req, res) => {
    const user = await User.find({user:req.params.id}).lean().exec()
    return res.status(200).send({ user })
})
// router.get("", async (req, res) => {
//     const item = await model.fintByIdandUpdate(req.params.id, req.body, { new: true }).lean().exec()
//     res.status(201).json({ item })
// })
// router.patch("/:id", async (req, res) => {
//     const user = await User.findOneAndUpdate({ user: req.params.id }, req.body, { new: true }).lean().exec()
//     return res.status(200).send({ user })
// })
module.exports = router