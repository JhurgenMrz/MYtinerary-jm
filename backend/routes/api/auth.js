const express = require('express');
const boom = require('@hapi/boom');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { config } = require('../../config');
const UserService = require('../../services/users');
const ApiKeysService = require('../../services/apiKeys');
const cookie = require('cookie-parser');

require('../../utils/auth/basic');

function authApi(app) {
  const router = express.Router();
  app.use('/api/auth', router);

  const userService = new UserService();
  const apiKeysService = new ApiKeysService();

  router.post('/sign-in', (req, res, next) => {
    const { apiKeyToken } = req.body;
    if (!apiKeyToken) {
      next(boom.unauthorized('ApiKey is Required'));
    }

    passport.authenticate('basic', function(error, user) {
      try {
        if (error || !user) {
          next(boom.unauthorized());
        }
        req.login(user, { session: false }, async function(err) {
          if (err) {
            next(err);
          }
          const apiKey = await apiKeysService.getApiKey({ token: apiKeyToken });
          //   console.log('apiKey', apiKey);
          if (!apiKey) {
            next(boom.unauthorized());
          }
          //   console.log(user);
          const { _id: id, user_name: name, email } = user;

          const payload = {
            sub: id,
            name: name,
            email: email,
            scopes: apiKey.scopes
          };
          //   console.log('payload', payload);

          const token = jwt.sign(payload, config.SecretKey, {
            expiresIn: '20m'
          });

          res.cookie('token', token, {
            httpOnly: config.dev,
            secure: config.dev
          });
          return res.status(200).json({ user: { id, name, email } });
        });
      } catch (err) {
        next(err);
      }
    })(req, res, next);
  });
}

module.exports = authApi;
