

var express=require('express');
var app=express();
var path=require('path');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const User=require('../db/user')

app.use(express.static("../public"));

const router = require('express').Router();

const publicPath = path.join(__dirname, '../public');


router.get('/login',function (req,res)
{

    res.sendFile(publicPath + "/html/login.html")

})



passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({username:username}, function(err, user){
            if(err) throw err;
            if(!user){
                return done(null, false, {message: 'Unknown User'});
            }

            User.findOne({password:password}, user.password, function(err, isMatch){
                if(err) throw err;
                if(isMatch){
                    return done(null, user);
                } else {
                    return done(null, false, {message: 'Invalid password'});
                }
            });
        });
    }));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findOne({_id:id}, function(err, user) {
        done(err, user);
    });
});

router.post('/login',
    passport.authenticate('local', {successRedirect:'/', failureRedirect:'/user/login',failureFlash: true}),
    function(req, res) {
        res.redirect('/');
    });



// router.post('/login',function (req,res)
// {
//
//    //if someone login then what to do
//     //first let us get the body and then we will check in our db
//     //the first part is matching password and username in the data base then we will use passport in launch 2
//     var usernameCheck=req.body.username;
//     var passwordCheck=req.body.password;
// User.findOne({username:usernameCheck},function (err,result) {
//     if(err)
//     {
//         console.log("something went wrong try again")
//     }
//     else if(result===null){
//         console.log("user not found")
//     }
//     else
//     {
//         res.redirect('/profile');
//     }
// });
//
// });


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


router.get('/logout', function(req, res){
    req.logout();

    req.flash('success_msg', 'You are logged out');

    res.redirect('/user/login');
});


module.exports=router