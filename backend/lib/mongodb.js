require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);

const urlDB = `mongodb+srv://admin:${process.env.PASSWORD_DB}@mytinerary-ateut.mongodb.net/merndb_my?retryWrites=true&w=majority`;

mongoose
  .connect(urlDB, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(data => {
    console.log("Connected");
  })
  .catch(err => {
    console.error(err);
  });

module.exports = mongoose;
