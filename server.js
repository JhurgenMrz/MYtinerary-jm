const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet')
const cors = require('cors');
require('dotenv').config();
require('./lib/mongodb');
const citiesApi = require('./routes/api/cities');
const itinerariesApi = require('./routes/api/itineraries');
const activitiesApi = require('./routes/api/activities');
const usersApi = require('./routes/api/users');
const authApi = require('./routes/api/auth');
const userItineraries = require('./routes/api/userItineraries');
const passport = require('passport');
const { join } = require('path')
const app = express();

//Middlewares
app.use(cors());
app.use(helmet())
app.use(passport.initialize());
app.use(bodyParser.json());

//Static Files
app.use(express.static(join(__dirname, 'client','build')))

//Routes
// Routes API
citiesApi(app);
itinerariesApi(app);
activitiesApi(app);
usersApi(app);
authApi(app);
userItineraries(app)
// Render Index.html
app.get('/', (req,res)=>{
    res.status(200).sendFile(join(__dirname,'client','build','index.html'))
})

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server on Port http://localhost:${port}`));
