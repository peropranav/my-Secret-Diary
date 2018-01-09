
var express=require('express');
var app=express();
var authRoutes=require('../routes/authRoutes.js');

app.use(express.static("../public"));
app.use('/',authRoutes);

app.use('/login',authRoutes);

app.listen(4000);
