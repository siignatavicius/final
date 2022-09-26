const mongoose = require("mongoose")
const Schema = mongoose.Schema

const itemModel = new Schema({
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    }


})

module.exports = mongoose.model("photoModel", itemModel)