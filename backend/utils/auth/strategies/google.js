const { Strategy: GoogleStrategy } = require('passport-google-oauth20');
const passport = require('passport');
const { config } = require('../../../config');
const UsersService = require('../../../services/users');

const userService = new UsersService();

passport.use(
  new GoogleStrategy(
    {
      clientID: config.googleIdClient,
      clientSecret: config.googleSecretClient,
      callbackURL: 'http://localhost:5001/api/auth/google/callback'
    },
    async function(accessToken, refreshToken, profile, cb) {
      console.log('profile', profile);
      try {
        const user = await userService.findOrCreate(profile);
        return cb(null, user);
      } catch (err) {
        return cb(err, null);
      }
    }
  )
);
