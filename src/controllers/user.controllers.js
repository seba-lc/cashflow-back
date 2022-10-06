const User = require('./../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const usersCtrl = {};

/*name, email, password*/
usersCtrl.createUser = async (req, res) => {
  try {
    const userInfo = req.body;
    const salt = await bcrypt.genSalt(10);
    userInfo.password = await bcrypt.hash(userInfo.password, salt);
    const newUser = new User(userInfo);
    await newUser.save();
    res.status(200).json({
      message: 'Succesful user generation'
    });
  } catch (error) {
    console.log(error);
    if(error.code === 11000){
      return res.status(201).json({error: "Existent user"})
    };
    res.status(404).json({
      message: 'Failure'
    })
  }
}
//CHECKED

/*user, password*/
usersCtrl.getUserByEmail = async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email}).select('-createdAt -updatedAt');
    if(user !== null){
      const result = await bcrypt.compare(req.body.password, user.password);
      if(result){
        const token = jwt.sign({id: user._id}, process.env.S_WORD, {expiresIn: process.env.EXPIRATION_TIME})
        res.status(200).json({id: token, name: user.name, email: user.email});
        return;
      }else{
        res.status(201).json({
          message: 'Incorrect data'
        })
      }
    }else{
      res.status(202).json({
        message: 'Incorrect data'
      })
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Failure, try again'
    })
  }
}
//CHECKED

usersCtrl.getUserByToken = async (req, res) => {
  try {
    const user = await User.findById(req.id).select('-_id -password -createdAt -updatedAt');
    res.status(200).json(user)
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Failure, try again'
    })
  }
}
//CHECKED

module.exports = usersCtrl;