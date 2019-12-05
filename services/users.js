const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { config } = require('../config');

class UserService {
  async getUsers() {
    try {
      const Users = await User.find();
      return Users || [];
    } catch (err) {
      return err;
    }
  }

  async findOrCreate(profile) {
    const { id, displayName: userName } = profile;
    const email = profile.emails[0].value;
    const avatarPicture = profile.photos[0].value;
    const UserExist = await User.findOne({ email });
    if (UserExist) {
      return UserExist;
    }
    try {
      const newUserWithGoogle = await User.create({
        googleId: id,
        email,
        userName,
        avatarPicture,
        password: id
      });
      return newUserWithGoogle;
    } catch (err) {
      return err;
    }
  }

  async verifyUser({ email, password }) {
    const userRequired = await User.findOne({ email: email });
    if (userRequired) {
      const payload = {
        id: userRequired._id,
        name: userRequired.user_name,
        email: userRequired.email
      };
      const match = await bcrypt.compare(password, userRequired.password);
      if (match) {
        jwt;
      } else {
        return;
      }
    }
  }
  async getUser({ email }) {
    try {
      console.log(email);
      const UserSearched = await User.findOne({ email });
      return UserSearched;
    } catch (err) {
      return err;
    }
  }

  async getUserById({ idUser }) {
    try {
      const UserSearched = await User.findById(idUser).select('-password');
      return UserSearched;
    } catch (err) {
      return err;
    }
  }

  async validationEmail({ user }) {
    const { email } = user;
    return User.find({ email: email });
  }

  async createUser({ email, password, userName, avatarPicture, country, firstName, lastName }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    password = hashedPassword
    try {
      const userCreated = await User.create({
        email, password, userName, avatarPicture, country, firstName, lastName
      });
      return userCreated;
    } catch (err) {
      return err;
    }
  }
  async deleteUser({ userId }) {
    try {
      const userDeleted = await User.findByIdAndDelete(userId);
      return userDeleted || [];
    } catch (err) {
      return err;
    }
  }
}

module.exports = UserService;
