const mongoose=require('mongoose');
//Schema

const Schema= mongoose.Schema;
const loginSchema=new Schema({
    username:String,
    password:String
});


const login=mongoose.model('login',loginSchema);
module.exports=login;