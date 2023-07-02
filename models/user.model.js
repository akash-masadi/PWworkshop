/*
 * This will hold a schema of User
 * It explains the different fields of use and how it will be
 * stored in the database
 */
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true
    },

    userID: { 
    type: String,
    required: true,
    unique: true
    },

    password: {
    type: String,
    required : true
    // minLength:8
    },

    email: {
    type : String,
    required : true,
    unique : true,
    minLength : 10,
    lowercase : true
    },

    userType:
    {
        type: String,
        require : true,
        default : "CUSTOMER",
        enum : ["CUSTOMER","ADMIN"]
    }
},{timestamps:true});
