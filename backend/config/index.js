require('dotenv').config();

const config = {
  dev: !process.env.NODE_ENV === 'production',
  SecretKey: process.env.SECRET,
  googleIdClient: process.env.GOOGLE_ID_CLIENT,
  googleSecretClient: process.env.GOOGLE_SECRET_CLIENT
};

module.exports = { config };
