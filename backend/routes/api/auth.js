const express = require("express");
const boom = require("@hapi/boom");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { config } = require("../../config");
const UserService = require("../../services/users");
const ApiKeysService = require("../../services/apiKeys");
const {
  newUserValidationRules,
  validate
} = require("../../utils/middlewares/validator");

require("../../utils/auth/strategies/basic");
require("../../utils/auth/strategies/google");

function authApi(app) {
  const router = express.Router();
  app.use("/api/auth", router);

  const userService = new UserService();
  const apiKeysService = new ApiKeysService();

  router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] }),
    async (req, res, next) => {}
  );

  router.get(
    "/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/login",
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
        expiresIn: "20m"
      });
      // res.cookie('token', token, {
      //   httpOnly: config.dev,
      //   secure: config.dev
      // });
      // return res.status(200).json({ user: { id, name, email }, token });

      res.redirect(`http://localhost:3000/loaduser/${token}`);
    }
  );

  router.post("/sign-in", (req, res, next) => {
    const { apiKeyToken } = req.body;
    if (!apiKeyToken) {
      next(boom.unauthorized("ApiKey is Required"));
    }

    passport.authenticate("basic", function(error, user) {
      try {
        if (error || !user) {
          next(boom.unauthorized());
        }
        req.login(user, { session: false }, async function(err) {
          if (err) {
            next(err);
          }
          const idUser = user._id;
          const userRequired = await userService.getUserById({ idUser });
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
          // console.log(config.SecretKey);
          const token = jwt.sign(payload, config.SecretKey, {
            expiresIn: "20m"
          });
          // res.cookie('token', token, {
          //   httpOnly: config.dev,
          //   secure: config.dev
          // });
          console.log({ user: { userRequired } });
          return res.status(200).json({ user: userRequired, token });
        });
      } catch (err) {
        next(err);
      }
    })(req, res, next);
  });

  router.post("/sign-up", newUserValidationRules(), validate, async function(
    req,
    res
  ) {
    const {
      email,
      password,
      userName,
      avatarPicture,
      country,
      apiKeyToken,
      firstName,
      lastName
    } = req.body;

    if (!email || !userName || !password) {
      return res.status(400).json({ message: "Please, enter all fields" });
    }
    const Exist = await userService.getUser({ email });
    if (Exist) {
      return res.status(400).json({ message: "User already exist" });
    }

    const apiKey = await apiKeysService.getApiKey({ token: apiKeyToken });
    // console.log('apiKey', apiKey);
    if (!apiKey) {
      res.status(401).json({ message: "Api-Key-Token is required" });
    }

    userService
      .createUser({
        email,
        password,
        userName,
        avatarPicture,
        country,
        firstName,
        lastName
      })
      .then(userCreated => {
        console.log("User Created: ", userCreated);
        const { _id: id, userName: name, email, avatarPicture } = userCreated;
        const payload = {
          sub: id,
          name: name,
          email,
          avatarPicture,
          scopes: apiKey.scopes
        };
        // console.log(config.SecretKey);
        const token = jwt.sign(payload, config.SecretKey, {
          expiresIn: "20m"
        });

        res.status(201).json({
          data: {
            user: userCreated,
            token
          },
          message: "user Created"
        });
      })
      .catch(err => {
        res.status(401).json({ message: "Error al crear el usuario" });
      });
  });
}

module.exports = authApi;
