

//if login
//ensure authenticatin then redirect to profile page where quotes are also there

var express=require('express');
var app=express();
var path=require('path');



const User=require('../db/user')


app.use(express.static("../public"));

const router = require('express').Router();

const publicPath = path.join(__dirname, '../public');


router.get('/',function (req,res)
{

res.render('profile.ejs')
})


router.get('/dashboard',function (req,res)
{

res.send("on dashboard")
})




router.post('/',function (req,res) {
    console.log(req.body);

//note is received now save to the matching user

    console.log(req.user);



            User.findOne({username:req.user.username}).update({ $push: { "notes": noteText} });

            console.log(noteText);

    })

    res.render('profile.ejs')

})

module.exports=router;