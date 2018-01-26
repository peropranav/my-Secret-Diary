
var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    username:
        {
            type: String
        },
    password:
        {
        type:String
        },
    clientSecret:
        {
          type:String
        },
        notes:
            {
                type:Array
            }


});



module.exports=mongoose.model('User', userSchema);
