const { check, validationResult } = require("express-validator");

exports.registerValidations = [
  check('name').exists().not().isEmpty().isLength({min: 3, max: 30}),
  check('email').exists().isEmail().isLength({min: 8, max: 50}),
  check('password').exists().not().isEmpty().isLength({min: 8, max: 30}),
  (req, res, next) => {
    checkValidations(req, res, next)
  }
]

exports.loginValidations = [
  check('email').exists().isEmail().isLength({min: 8, max: 50}),
  check('password').exists().not().isEmpty().isLength({min: 8, max: 30}),
  (req, res, next) => {
    checkValidations(req, res, next)
  }
]

exports.journeyValidations = [
  check('user').exists().isEmail().isLength({min: 8, max: 50}),
  (req, res, next) => {
    checkValidations(req, res, next)
  }
]

const checkValidations = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      console.log(errors.array());
      return res.status(400).json({errors: errors.array()})
    }else{
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({errors: error.array()})
  }
}