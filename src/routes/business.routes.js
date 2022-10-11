const { Router } = require('express');
const { checkToken } = require('../middlewares/auth');
const businessCtrl = require('./../controllers/business.controllers');

const router = Router();

const { createBusiness, getBusinesses } = businessCtrl;

router.route('/')
  .post(/*checkToken, */createBusiness)
  .get(/*checkToken, */ getBusinesses);

module.exports = router;