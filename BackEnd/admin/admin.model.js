const mongoose = require("mongoose");

const adminschema = new mongoose.Schema({
    name:{type: String}, 
    email : {type: String},
    // email: {type: String , unique: true, required: true, validate:{
    //     validator: function(email){
    //         var re = /\S+@\+.\S+/;
    //         return re.test(email);
    //     }
    // }},
    password: {type: String },
    phone: {type: String, validate:{
        validator: function(v){
            return /^([0-9]{$})/.test(v);
        }
    }}
})

const AdminModel = mongoose.model('admin', adminschema)
module.exports = AdminModel