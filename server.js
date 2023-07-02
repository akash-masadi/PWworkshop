const express =  require('express');
const serverConfig = require('./config/server.config');
const app = express();
const mongoose =require('mongoose');
const dbConfig=require('./config/db.config');

/*
*Logic to connect the MongoDB and create an Admin user
*/
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;
db.on('error',()=>{
    console.error.bind(console,'connection error:')}
    );
db.once('open',()=>{
    console.log("Connection Successful!");
});


app.listen(serverConfig.port, () => {
    console.log('Server running on port 3333');
});