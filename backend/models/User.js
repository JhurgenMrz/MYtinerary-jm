const {Schema, model} = require('mongoose')

const User = new Schema({
    user_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    country: {
        type: String
    },
})

module.exports = model('Users',User)