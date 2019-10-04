var mongoose = require('mongoose');
var Schema = mongoose.Schema

var userSchema = new Schema({
    user_name:{type:String , required:true},
    password:{type:String , required:true},
    mobile_number:{type:String , required:true},
    chats:[{type:String}],
    email:{type:String}
})


const User = mongoose.model('User',userSchema)
module.exports = User;