

var express=require('express');
var app=express();
var path=require('path')
app.use(express.static("../public"));

const router = require('express').Router();

const publicPath = path.join(__dirname, '../public');

router.get('/',function (req,res)
{

    res.send("home page");


})



    router.get('/login',function (req,res)
    {

        res.sendFile(publicPath + "/html/login.html")
})


module.exports=router;