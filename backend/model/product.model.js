const mongoose = require("mongoose")

const productschema = mongoose.Schema({
    type : String,
    image: [String],
    title : String,
    price : Number,
    rating : String,
    discount :Number,
    category : String,
    color :String,
    gender :String,
    packsize:String
})

const productModel = mongoose.model("product",productschema)

module.exports = {
    productModel
}