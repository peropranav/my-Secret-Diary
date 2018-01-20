

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

router.get('/',function (req,res)
{

    //res.send("home page");
    res.redirect('user/login')


})





module.exports=router;