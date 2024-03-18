const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const multer = require("multer");
const EmployeeModel = require('./models/Employee');
const { ObjectId } = require('mongodb');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Constants
const CONNECTION_STRING = "mongodb+srv://wanjanadep:Kj5316bolf@customers.29nkvpy.mongodb.net/?retryWrites=true&w=majority&appName=Customers";
const DATABASE_NAME = "HopeFinder";
let database;

// Connect to MongoDB
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

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// <------Routes-------->
app.get('/api/customer/test', (request, response) => {
    database.collection("Paient")
        .find()
        .toArray()
        .then(patients => {
            response.status(200).json(patients);
        })
        .catch(error => {
            console.error("Error retrieving data from MongoDB:", error);
            response.status(500).json({ error: "Could not fetch documents" });
        });
});

//Total number of Patients
app.get('/api/customer/count', (request, response) => {
    database.collection("Paient")
        .countDocuments()
        .then(count => {
            response.status(200).json({ count });
        })
        .catch(error => {
            console.error("Error retrieving data from MongoDB:", error);
            response.status(500).json({ error: "Could not fetch document count" });
        });
});

//Total number of Patients with similar Alkane levels
app.get('/api/customer/count2', async (request, response) => {
    try {
        const range=200; //<- Get the hardware alkane range here
        const count = await database.collection("MedicalAnylasis")
            .countDocuments({ AlkaneRange: range });

        response.status(200).json({ count });
    } catch (error) {
        console.error("Error retrieving data from MongoDB:", error);
        response.status(500).json({ error: "Could not fetch document count" });
    }
});

//Total number of Patients that have cancer with the similar ALkane level
app.get('/api/customer/count3', async (request, response) => {
    try {
        const range = 200; // Get the hardware alkane range here
        const count = await database.collection("FinalResult")
            .countDocuments({result: "positive",AlkaneRange:range });
        response.status(200).json({ count });
    } catch (error) {
        console.error("Error retrieving data from MongoDB:", error);
        response.status(500).json({ error: "Could not fetch document count" });
    }
});

////Total number of Patients that don't have cancer with the similar Alkane level
app.get('/api/customer/count4', async (request, response) => {
    try {
        const range = 200; // Get the hardware alkane range here
        const count = await database.collection("FinalResult")
            .countDocuments({result: "negative",AlkaneRange:range });
        response.status(200).json({ count });
    } catch (error) {
        console.error("Error retrieving data from MongoDB:", error);
        response.status(500).json({ error: "Could not fetch document count" });
    }
});


app.get('/api/customer/getnotes/ofone', (request, response) => {
    
    const myid = "65f2b0f77cd285a6382417a4";
    database.collection("Paient")
        .findOne({ _id: ObjectId(myid) }, { projection: { ContactNumber: 1, _id: 0 } })
        .then(patients => {
            response.status(200).json(patients);
        })
        .catch(error => {
            console.error("Error retrieving data from MongoDB:", error);
            response.status(500).json({ error: "Could not fetch documents" });
        });
});

app.post('/api/customer/addnotes', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.status(500).json(err));
});

app.get('/api/customer/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        database.collection("Paient")
            .findOne({ _id: ObjectId(req.params.id) })
            .then(patients => {
                res.status(200).json(patients);
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: 'Internal server error' });
            });
    } else {
        res.status(500).json({ error: "Error" });
    }
});
