const express = require('express');

const UserService = require('../../services/users');

function usersApi(app) {
  const router = express.Router();
  const userService = new UserService();
  app.use('/api/users', router);

  router.get('/', async function(req, res) {
    const users = await userService.getUsers();
    //Funciona!
    res.status(200).json({
      data: users,
      message: 'users Listed'
    });
  });

  router.post('/sign-in', async function(req, res) {
    const {
      body: { email, password }
    } = req;

    const userRequired = await userService.verifyUser({ email, password });
  });

  router.post('/sign-up', async function(req, res) {
    const { body: user } = req;
    const Exist = await userService.validationEmail({ user });
    console.log(Exist);
    if (Exist.length === 0) {
      const userCreated = await userService.createUser({ user });
      //Funciona!
      res.status(201).json({
        data: userCreated,
        message: 'user Created'
      });
    } else {
      res.status(200).json({
        data: [],
        message: 'user exist'
      });
    }
  });
  router.delete('/:userId/', async function(req, res) {
    const { userId } = req.params;
    const userDeleted = await userService.deleteUser({ userId });
    //Funciona!
    res.status(200).json({
      data: userDeleted,
      message: 'user Deleted'
    });
  });
}

module.exports = usersApi;
