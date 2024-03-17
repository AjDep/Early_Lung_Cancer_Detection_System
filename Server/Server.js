var express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

//const mongoose = require('mongoose');
//In your code, you're using the MongoDB Node.js driver directly to interact with your MongoDB database. The find method you're using is part of the MongoDB Node.js driver, not Mongoose
var app = express();
app.use(cors());

//var CONNECTION_STRING ="mongodb+srv://wanjanadep:Kj5316bolf@customers.29nkvpy.mongodb.net/?retryWrites=true&w=majority&appName=Customers";
var CONNECTION_STRING ="mongodb+srv://wanjanadep:Kj5316bolf@customers.29nkvpy.mongodb.net/?retryWrites=true&w=majority&appName=Customers";
//var CONNECTION_STRING = "mongodb+srv://wanjanadep:Kj5316bolf@customers.29nkvpy.mongodb.net/";
//var CONNECTION_STRING = "mongodb+srv://wanjanadep:Kj5316bolf@customers.29nkvpy.mongodb.net/";
var DATABASE_NAME = "HopeFinder";
var database;


app.listen(5038, () => {
    MongoClient.connect(CONNECTION_STRING, (error, client) => {
        if (error) {
            console.error("Error connecting to MongoDB:", error);
            return;
        }
        database = client.db(DATABASE_NAME);
        console.log("Mongo DB connected");
    });
});
app.get('/api/Customer/GetNotes', (request, response) => {
    database.collection("Paient").find({}).toArray((error, result) => {

        if (error) {
            console.error("Error retrieving data from MongoDB:", error);
            response.status(500).send("Internal Server Error");
            return;
        }
        response.send(result);
    });
});
app.post('/api/Customer/AddNotes', (req, res) => {
    const formData = req.body; // Assuming form data is sent in the request body
    database.collection("Paient").insertOne(formData, (error, result) => {
        if (error) {
            console.error("Error saving data to MongoDB:", error);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.status(201).send("Data saved successfully");
    });
});
