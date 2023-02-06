const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = new Schema({
    image: {
        type: String,
        default: null,
        require: true
    },
    name: {
        type: String,
        default: null,
        require: true
    },
    author: {
        type: String,
        default: null,
        require: true
    },
    description: {
        type: String,
        default: null,
        require: true
    },
    price: {
        type: Number,
        default: null,
        require: true
    },
    available: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Book", bookSchema)