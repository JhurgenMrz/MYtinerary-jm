const express = require('express');
const authentication = require('../../utils/middlewares/authentication');
const passport = require('passport');

const UserService = require('../../services/users');
require('../../utils/auth/strategies/jwt');

function usersApi(app) {
  const router = express.Router();
  const userService = new UserService();
  app.use('/api/users', router);

  router.get('/user', passport.authenticate('jwt', { session: false }),
    async (req, res) => {
      const idUser = req.user._id
      const user = await userService.getUserById(idUser)
      res.json(user)
    })

  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    async function (req, res) {
      const users = await userService.getUsers();
      //Funciona!
      res.status(200).json({
        data: users,
        message: 'users Listed'
      });
    }
  );

  router.get('/:idUser', authentication, async function (req, res) {
    const { idUser } = req.params;
    const users = await userService.getUserById({ idUser });
    res.status(200).json({
      data: users,
      message: 'user listed'
    });
  });

  router.delete('/:userId/', authentication, async function (req, res) {
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
