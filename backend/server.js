const express = require('express');
const app = express();
require('./src/lib/mongodb')

app.get('/', (req, res) => res.send('Hello! :D'))
app.get('/test', (req, res) => res.json({'mgs': 'Hello World! :D'}))

//Routes
app.use('/api/cities', require('../backend/src/routes/cities'))


const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server on Port ${port}`))
