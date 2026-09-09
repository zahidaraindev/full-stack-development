const mongoose = require('mongoose');

const UsreSchema = new mongoose.Schema ({

name: {
    type:string,
    required:true,
},
email:{
    type:string,
    required:true,
    unique:true,
},
password:{
    type:string,
    required:true,
},
avatar: {
    type:string,
},
date: {
    type:date,
    default:Date.now,
}    
});
module.exports =User = mongoose.modle('userSchema');