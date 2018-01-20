
var express=require('express');
var bodyParser = require('body-parser');

var app=express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mySecretDiary');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var bodyParser = require('body-parser');

var authRoutes=require('../routes/authRoutes');
var user=require('../routes/user');



app.use(express.static("../public"));
app.use('/',authRoutes);

app.use('/user',user);

app.listen(4000);
