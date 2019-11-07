const { Schema, model } = require("mongoose");

const City = new Schema({
  country: {
    type: String,
    required: true
  },
  city_name: {
    type: String,
    required: true
  },
  rating:{
    type: Number,
    required: true
  },
  img_url: {
    type: String,
    required: true
  },
  themes: {
    type: Array,
    required: true
  },
  activities: {
    type: Array,
    required: true
  }
});

module.exports = model("cities", City);
