const { body, validationResult } = require("express-validator");
const userValidationRules = () => {
  return [
    // username must be an email
    body("email").isEmail(),
    // password must be at least 5 chars long
    body("password").isLength({ min: 5 })
  ];
};
const newUserValidationRules = () => {
  return [
    // username must be an email
    body("userName").isString(),
    // password must be at least 5 chars long
    body("password").isLength({ min: 5 }),
    body("email").isEmail(),
    body("firstName").isString(),
    body("lastName").isString(),
    body("country").isString(),
    body("avatarPicture").isString()
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors
  });
};

module.exports = {
  userValidationRules,
  validate,
  newUserValidationRules
};
