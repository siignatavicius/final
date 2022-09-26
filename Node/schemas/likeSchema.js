const mongoose = require("mongoose")
const Schema = mongoose.Schema

const itemModel = new Schema({
    name: {
        type: String,
        required: true
    },
    likeName: {
        type: String,
        required: true
    }


})

module.exports = mongoose.model("likeModel", itemModel)