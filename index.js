const express = require('express');
const mongoose = require('mongoose');
const employeeRoute = require('./controller/employeeRoute.js');
const timeTrackingRoute = require('./controller/timeTrackingRoute.js');
const cors = require('cors');
const bodyParser = require('body-parser');
const timeTrackingSchema = require('./model/timeTrackingSchema.js');
const employeeSchema = require('./model/employeeSchema.js');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://siddupaturi09:5620@cluster0.1a6t1.mongodb.net/employeetimedb');
var db = mongoose.connection;
db.on('open', () => console.log('Connected to DB'));
db.on('error', () => console.log('Error occurred while connecting with DB'));

app.use('/employeeRoute', employeeRoute);
app.use('/timeTrackingRoute', timeTrackingRoute);

app.listen(5500, () => {
  console.log('Server Started at 5500');
});
