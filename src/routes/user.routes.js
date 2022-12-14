const { Router } = require('express');
const { checkToken } = require('../middlewares/auth');
const usersCtrl = require('./../controllers/user.controllers');

const router = Router();

const { createUser, getUserByUser, getUserByToken } = usersCtrl;

router.route('/')
  .post(getUserByUser)
  .get(checkToken, getUserByToken);

router.route('/register')
  .post(createUser);

module.exports = router;