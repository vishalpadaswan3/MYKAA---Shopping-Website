const express = require("express")
const { productModel } = require("../model/product.model.js")

const pro = express.Router()

pro.get("/products", async (req, res) => {
    try {
        const s = await productModel.find()
        console.log(s.length)
        res.send(s)
    } catch (error) {
        res.send({ "msg": "Something went wrong", "error": error.message })
    }

})

pro.post("/products/add", async (req, res) => {

    const s = await productModel.find()
    console.log(s.length)

    try {
        const payload = req.body
        const user = new productModel(payload)
        await user.save()
        // console.log(user)

        res.send("Data has been added")
    } catch (error) {
        res.send({ "msg": "Something went wrong", "error": error.message })
    }
})

module.exports = {
    pro
}