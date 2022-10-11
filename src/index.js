const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const connectDB = require('./database');
const userRouter = require('./routes/user.routes');
const businessRouter = require('./routes/business.routes');
const journeyRouter = require('./routes/journey.routes');

const app = express();
require('dotenv').config();

//port configuration and db

connectDB();
app.set('port', process.env.PORT || 4500);
app.listen(app.get('port'), () => {
  console.log('Server on port ' + app.get('port'));
});

//initial settings

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './../public')));

//routes
app.use('/api/incomesproject/users', userRouter);
app.use('/api/incomesproject/business', businessRouter);
app.use('/api/incomesproject/journey', journeyRouter);