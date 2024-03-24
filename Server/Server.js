const express = require("express");
require ("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const multer = require("multer");
const EmployeeModel = require('./models/Employee');
const { ObjectId } = require('mongodb');

const app = express();
const myid = "65f5a1fe82719ff7d425d204";
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
// where <- try using where function
// how to get 2 conditions using aggregate
app.get('/api/customer/count3', async (request, response) => {
    try {
        const range = 200; // Get the hardware alkane range here
        const count = await database.collection("FinalResult").aggregate([
            {
                $match: {
                    result: "positive",
                    AlkaneRange: range
                }
            },
            {
                $count: "count"
            }
        ]).toArray();

        // Extract the count from the result array
        const totalCount = count.length > 0 ? count[0].count : 0;

        response.status(200).json({ count: totalCount });
    } catch (error) {
        console.error("Error retrieving data from MongoDB:", error);
        response.status(500).json({ error: "Could not fetch document count" });
    }
});
////Total number of Patients that don't have cancer with the similar Alkane level
app.get('/api/customer/count4', async (request, response) => {
    try {
        const range = 200; // Get the hardware alkane range here
        const count = await database.collection("FinalResult").aggregate([
            {
                $match: {
                    result: "negative",
                    AlkaneRange: range
                }
            },
            {
                $count: "count"
            }
        ]).toArray();

        // Extract the count from the result array
        const totalCount = count.length > 0 ? count[0].count : 0;

        response.status(200).json({ count: totalCount });
    } catch (error) {
        console.error("Error retrieving data from MongoDB:", error);
        response.status(500).json({ error: "Could not fetch document count" });
    }
});




app.get('/api/customer/getnotes/Name', (request, response) => {
    
    
    database.collection("Paient")
        .findOne({ _id: ObjectId(myid) }, { projection: { name: 1, _id: 0 } })
        .then(patients => {
            response.status(200).json(patients);
        })
        .catch(error => {
            console.error("Error retrieving data from MongoDB:", error);
            response.status(500).json({ error: "Could not fetch documents" });
        });
});
app.get('/api/customer/Appointment', (request, response) => {
    
    
    database.collection("DocAppoinments")
        .find({ patient_id:"P001"}, { projection: {  hospital:1,appointment_date:1,doctor_name: 1, _id: 0 } })
        .toArray()
        .then(patients => {
            response.status(200).json(patients);
        })
        .catch(error => {
            console.error("Error retrieving data from MongoDB:", error);
            response.status(500).json({ error: "Could not fetch documents" });
        });
});
app.get('/api/customer/chart', (request, response) => {
    database.collection("MedicalAnylasis")
    .find(
        { PatientID: {$in: ["P001", "P002"] } },
        { projection: { AlkaneRange: 1, Date: 1, color: 1 } }
    )
    .toArray()
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
