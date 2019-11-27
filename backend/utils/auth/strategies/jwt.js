const { Strategy: JwtStrategy } = require('passport-jwt');
const { ExtractJwt } = require('passport-jwt');
const mongoose = require('mongoose');
const User = require('../../../models/User');
const { config } = require('../../../config');
const passport = require('passport');

const obts = {};
obts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
obts.secretOrKey = config.SecretKey;

module.exports = passport.use(
  new JwtStrategy(obts, (jwt_payload, done) => {
    User.findById(jwt_payload.sub)
      .then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => console.log(err));
  })
);
