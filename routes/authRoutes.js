

var express=require('express');
var app=express();
var path=require('path');

const User=require('../db/user')
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static("../public"));

const router = require('express').Router();

const publicPath = path.join(__dirname, '../public');

router.get('/', ensureAuthenticated, function(req, res){
    res.redirect('/profile')
});

function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        //req.flash('error_msg','You are not logged in');
        res.redirect('/user/login');
    }
}

module.exports = router;




