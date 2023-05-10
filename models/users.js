const mongoose = require('mongoose')
require('dotenv').config()

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Provide Name'],
        minLength: 3,
        maxLength: 50,
    },
    email: {
        type: String,
        required: [true, 'Please Provide Email'],
    },
    password: {
        type: String,
        required: [true, 'Please Provide Password'],
        minLength: 6
    },
    img: {
        type: String,
    }
})

module.exports = mongoose.model('UserB', UserSchema)