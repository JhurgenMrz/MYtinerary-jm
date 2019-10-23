const {Schema, model} = require('mongoose')

const City = new Schema({
    country: {
        type: String,
        required: true
    },
    city_name: {
        type: String,
        required: true
    }
})

module.exports = model('City',City)