const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email : { type: String, required: true},
    passwordHash : {type: String, required: true},
    first_name : {type: String, required:true},
    last_name : {type: String, required:true},
    contact_no : {type: String, required:true},
    address : {type: String, required:true},
    username : {type: String, requires:true},
});

const User = mongoose.model("user", userSchema);

module.exports = User;