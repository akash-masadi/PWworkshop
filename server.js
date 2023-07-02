const express =  require('express');
const serverConfig = require('./config/server.config');
const mongoose =require('mongoose');
const dbConfig=require('./config/db.config');
const userModel=require('./models/user.model');
const app = express();

/*
*Logic to connect the MongoDB and create an Admin user
*Need to have the mongoDB up and running 
*/
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;

db.on("error",()=>{
    console.log("connection error:");
});

db.once("open",()=>{
    console.log("Connection Successful!");
    init();
});

async function init()
{

    let admin=await userModel.findOne({
        userID:"admin"
    });
    if(admin)
    {
        console.log("Admin user already exists!");
        return;
    }

    /*
    *This will create an admin user if it does not *exist
    */
   admin= await userModel.create({
    name:"Akash Masadi",
    userID:"admin",
    email:"akashmasadi6@gmail.com",
    userType:"ADMIN",
    password:"Welcome1"
   });
   console.log(admin);
}

app.listen(serverConfig.PORT, () => {
    console.log('Server running on port '+serverConfig.PORT+'...');
});


