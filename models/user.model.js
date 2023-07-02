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
    }
});
