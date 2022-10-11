const { Router } = require('express');
const { checkToken } = require('../middlewares/auth');
const usersCtrl = require('./../controllers/user.controllers');
const { registerValidations, loginValidations } = require('../middlewares/checkDoc');

const router = Router();

const { createUser, getUserByEmail, getUserByToken } = usersCtrl;

router.route('/')
  .post(loginValidations, getUserByEmail)
  .get(checkToken, getUserByToken);

router.route('/register')
  .post(registerValidations, createUser);

module.exports = router;