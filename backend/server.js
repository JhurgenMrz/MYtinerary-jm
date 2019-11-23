const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
require('./lib/mongodb');
const citiesApi = require('./routes/api/cities');
const itinerariesApi = require('./routes/api/itineraries');
const activitiesApi = require('./routes/api/activities');
const usersApi = require('./routes/api/users');
const authApi = require('./routes/api/auth');
const passport = require('passport');

//Middlewares
app.use(cors());
app.use(passport.initialize());
app.use(bodyParser.json());

//Routes
citiesApi(app);
itinerariesApi(app);
activitiesApi(app);
usersApi(app);
authApi(app);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server on Port http://localhost:${port}`));
