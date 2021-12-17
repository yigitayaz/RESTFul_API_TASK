/* This file is responsible for connection to database and getting credentials from given credentials.txt file for database.
* Make sure that your credentials file is formatted correctly. Text file format can be found in given README file.*/
const mongoose = require("mongoose");
const fs = require("fs");

const file = fs.readFileSync('./db/credentials.txt','utf-8');

const array = file.split("\n");

if(array.length ===5){
    const host = array[0];
    const username = array[1];
    const password = array[2];
    const port = array[3];
    const dbname = array[4];
    //connection is handled below
    module.exports = () => {
        var connectionString ='mongodb://' + username + ':' + password + '@' + host + ':' + port + '/' + dbname + '?authSource=admin';
        mongoose.connect(connectionString);

        mongoose.connection.on("open", () => {
            console.log("Connected to database: "+dbname );
        });
        mongoose.connection.on("error", (err) => {
            console.log("Error"+err);
        });
        mongoose.Promise = global.Promise;
    }
}
else{
    console.log("Wrong credentials format!")
}
