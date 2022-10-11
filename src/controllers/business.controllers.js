const Business = require('./../models/Business');

const businessCtrl = {};

businessCtrl.createBusiness = async (req, res) => {
  try {
    const newBusiness = new Business(req.body);
    await newBusiness.save();
    res.status(200).json({
      message: 'Succesful business generation'
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Failure'
    });
  }
}

businessCtrl.getBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find();
    res.status(200).json(businesses)
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Failure'
    });
  }
}

module.exports = businessCtrl;