const mongoose = require('mongoose');

const urlDB = 'mongodb+srv://admin:FeEsperanzayAmor7+@mytinerary-ateut.mongodb.net/test?retryWrites=true&w=majority'

class Database {
    constructor() {
      this._connect()
    }
    
  _connect() {
       mongoose.connect(urlDB,{
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
       })
         .then((data) => {
           console.log('Connected')
         })
         .catch(err => {
           console.error('Database connection error')
         })
    }
  }
  
  module.exports = new Database()