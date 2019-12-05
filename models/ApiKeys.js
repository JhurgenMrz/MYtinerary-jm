const { Schema, model } = require('mongoose');

const ApiKeys = new Schema({
  token: {
    type: String
  },
  scopes: {
    type: Array
  }
});

module.exports = model('api-keys', ApiKeys);
