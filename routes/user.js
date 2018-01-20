

var express=require('express');
var app=express();
var path=require('path');

const User=require('../db/user')


app.use(express.static("../public"));

const router = require('express').Router();

const publicPath = path.join(__dirname, '../public');


router.get('/login',function (req,res)
{

    res.sendFile(publicPath + "/html/login.html")

})

router.post('/login',function (req,res)
{

   //if someone login then what to do
    //first let us get the body and then we will check in our db
    //the first part is matching password and username in the data base then we will use passport in launch 2
    var usernameCheck=req.body.username;
    var passwordCheck=req.body.password;
User.findOne({username:usernameCheck},function (err,result) {
    if(err)
    {
        console.log("something went wrong try again")
    }
    else if(result===null){
        console.log("user not found")
    }
    else
    {
        res.redirect('/');
    }
});

});


router.get('/signUp',function (req,res)
{

    res.sendFile(publicPath + "/html/signUp.html")
})

router.post('/signUp',function (req,res) {

    var username = req.body.username;
    var password = req.body.password;
    var clientSecret = req.body.clientSecret;

            new User({
                username: username,
                password: password,
                clientSecret: clientSecret
            }).save().then((newUser) => {
                console.log('created new user: ', newUser);
                done(null, newUser);



            });


    res.redirect('/');


    })


module.exports=router