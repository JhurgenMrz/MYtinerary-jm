const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config()
require('./lib/mongodb')
const citiesApi = require('./routes/api/cities')


//Middlewares
app.use(cors())
app.use(bodyParser.json())

//Routes
citiesApi(app)


const port = process.env.PORT || 5001;
app.listen(port, ()=> console.log(`Server on Port http://localhost:${port}`))
