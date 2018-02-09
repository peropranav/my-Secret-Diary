

//if login
//ensure authenticatin then redirect to profile page where quotes are also there

var express=require('express');
var app=express();
var path=require('path');



const User=require('../db/user')


app.use(express.static("../public"));

const router = require('express').Router();

const publicPath = path.join(__dirname, '../public');


router.get('/',ensureAuthenticated,function (req,res)
{
console.log(req.user.notes.length);
res.render('profile',
    {
        basic: [
            {
                username: req.user.username
            },
            {
                notesLength: req.user.notes.length

            }
        ]
    }

    );

})


router.get('/dashboard',ensureAuthenticated,function (req,res)
{

res.render('dashboard',

    {
        notesToClient:[

            {
                notesLength: req.user.notes.length
            },
            {
                notesToDisplay:req.user.notes
            }



        ]
    }

    )
})




router.post('/',function (req,res) {
    console.log(req.body);

//note is received now save to the matching user

    console.log(req.user);
var id=req.user._id;
var noteText=req.body.notepost;

    User.findByIdAndUpdate(id,
        { $push: { "notes" : noteText}} ,function(err,result)

        {
            if (err) return handleError(err);


        }
    );


            console.log(noteText);

    res.redirect('/')

})



function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        //req.flash('error_msg','You are not logged in');
        res.redirect('/user/login');
    }
}
module.exports=router;
