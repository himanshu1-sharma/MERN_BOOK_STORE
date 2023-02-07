const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminSchema = new Schema({
    profilepic: {
        type: String,
        default: null,
        required: true
    },
    name: {
        type: String,
        default: null,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
        type: String,
        default: null,
        required: true,
        minlength: 6
    }
})


module.exports = mongoose.model("Admin", adminSchema)