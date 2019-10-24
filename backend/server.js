const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv').config()
require('./src/lib/mongodb')
const cities = require('./src/routes/cities')


//Middlewares
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello! :D'))
app.get('/test', (req, res) => res.json({'mgs': 'Hello World! :D'}))

//Routes
app.use('/api/cities', cities)


const port = process.env.PORT || 5001;
app.listen(port, ()=> console.log(`Server on Port ${port}`))
