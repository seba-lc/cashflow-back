const Journey = require('./../models/Journey');

const journeyCtrl = {};

journeyCtrl.createJourney = async (req, res) => {
  try {
    const newJourney = new Journey(req.body);
    await newJourney.save();
    res.status(200).json({
      message: 'Succesful journey generation'
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Failure'
    });
  }
}

journeyCtrl.getUserJourneys = async (req, res) => {
  try {
    const userJourneys = await Journey.find({ user: req.body.user }, '-_id' ).populate('business', '-_id');
    if(userJourneys.length !== 0){
      res.status(200).json(userJourneys);
    }else{
      res.status(201).json({
        message: 'No Journeys for this user'
      })
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Failure'
    });
  }
}

module.exports = journeyCtrl;

//RUTAS PROBADAS CON POSTMAN