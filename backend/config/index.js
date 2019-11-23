require('dotenv').config();

const config = {
  dev: !process.env.NODE_ENV === 'production',
  SecretKey: process.env.SECRET
};

module.exports = { config };
