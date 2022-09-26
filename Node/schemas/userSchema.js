const mongoose = require("mongoose")
const Schema = mongoose.Schema

const itemModel = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
   
})

module.exports = mongoose.model("userModel", itemModel)