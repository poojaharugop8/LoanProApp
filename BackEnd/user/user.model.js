const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    name:{type: String},
    image:{type: String},
    profilecompleted:{type: Boolean, default:false},
    
    email : {type: String},
    // email: {type: String , unique: true, required: true, validate:{
    //     validator: function(email){
    //         var re = /\S+@\+.\S+/;
    //         return re.test(email);
    //     }
    // }},
    password: {type: String },
    otp: {type: String },
    aadhar:{type: String},
    pan:{type: String},
    address:{type: String},
    creatonDate: {type: Date, default: new Date()},
    approved: {type: Boolean, default: false},
    phone: {type: String, validate:{
        validator: function(v){
            return /^([0-9]{$})/.test(v);
        }
    }}
})

const UserModel = mongoose.model('users', userschema)
module.exports = UserModel