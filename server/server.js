
var express=require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');

var app=express();

app.use(cookieParser());

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

app.use(flash());

// Passport init
app.use(passport.initialize());
app.use(passport.session());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mySecretDiary');
app.set('view engine', 'ejs');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var bodyParser = require('body-parser');

var authRoutes=require('../routes/authRoutes');
var user=require('../routes/user');
var profile=require('../routes/profile');




app.use(express.static("../public"));
app.use('/',authRoutes);

app.use('/user',user);
app.use('/profile',profile);


app.listen(4000);
