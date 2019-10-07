var mongoose = require('mongoose');
var Schema = mongoose.Schema

var userSchema = new Schema({
    userName:{type:String , required:true},
    password:{type:String , required:true},
    mobileNumber:{type:String , required:true},
    chats:[{type:String}],
    email:{type:String},
    date:{
        type: Date,
        default: Date.now
    }
})


const User = mongoose.model('User',userSchema)
module.exports = User;