const express = require('express');
const boom = require('@hapi/boom');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { config } = require('../../config');
const UserService = require('../../services/users');
const ApiKeysService = require('../../services/apiKeys');
const cookie = require('cookie-parser');

require('../../utils/auth/strategies/basic');
require('../../utils/auth/strategies/google');

function authApi(app) {
  const router = express.Router();
  app.use('/api/auth', router);

  const userService = new UserService();
  const apiKeysService = new ApiKeysService();

  router.get(
    '/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }),
    async (req, res, next) => {}
  );

  router.get(
    '/google/callback',
    passport.authenticate('google', {
      failureRedirect: '/login',
      session: false
    }),
    async (req, res, next) => {
      console.log(req.user);

      const { _id: id, userName: name, email, avatarPicture } = req.user;
      const payload = {
        sub: id,
        name: name,
        email: email,
        avatarPicture
      };
      const token = jwt.sign(payload, config.SecretKey, {
        expiresIn: '20m'
      });
      // res.cookie('token', token, {
      //   httpOnly: config.dev,
      //   secure: config.dev
      // });
      return res.status(200).json({ user: { id, name, email }, token });
    }
  );

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
          const { _id: id, userName: name, email, avatarPicture } = user;
          const payload = {
            sub: id,
            name: name,
            email: email,
            avatarPicture,
            scopes: apiKey.scopes
          };
          console.log(config.SecretKey);
          const token = jwt.sign(payload, config.SecretKey, {
            expiresIn: '20m'
          });
          // res.cookie('token', token, {
          //   httpOnly: config.dev,
          //   secure: config.dev
          // });
          return res.status(200).json({ user: { id, name, email }, token });
        });
      } catch (err) {
        next(err);
      }
    })(req, res, next);
  });

  router.post('/sign-up', async function(req, res) {
    const { body: user } = req;
    const { email, user_name, password } = req.body;

    if (!email || !user_name || !password) {
      return res.status(400).json({ message: 'Please, enter all fields' });
    }

    const Exist = await userService.getUser({ email });
    console.log(Exist);
    if (Exist) {
      return res.status(400).json({ message: 'User already exist' });
    }

    try {
      const userCreated = await userService.createUser({ user });
      res.status(201).json({
        data: userCreated,
        message: 'user Created'
      });
    } catch (err) {
      res.status(401).json({ message: 'An expected current error' });
    }
  });
}

module.exports = authApi;
