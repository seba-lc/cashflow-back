const jwt = require('jsonwebtoken');

exports.checkToken = (req, res, next) => {
  const token = req.header('x-auth-token');
  if(!token){
    res.status(400).json({ ok: false, message: 'Invalid Token' });
    return;
  }
  try {
    const {id} = jwt.verify(token, process.env.S_WORD);
    if(!id){
      res.status(400).json({ ok: false, message: 'Invalid Token' });
      return;
    }
    req.id = id;
    next();
  } catch (error) {
    console.log(error.message);
    if(error.message === 'jwt expired'){
      res.status(201).json({ message: 'Token expired'});
    }
    res.status(500).json({ message: 'Failure in the Server' })
  }
}