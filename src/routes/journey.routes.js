const { Router } = require('express');
const { checkToken } = require('../middlewares/auth');
const { journeyValidations } = require('../middlewares/checkDoc');
const journeyCtrl = require('./../controllers/journey.controllers');

const router = Router();

const { createJourney, getUserJourneys } = journeyCtrl;

router.route('/')
  .post(/*checkToken, */journeyValidations, createJourney);

router.route('/user')
  .post(/*checkToken, */journeyValidations, getUserJourneys);

module.exports = router;