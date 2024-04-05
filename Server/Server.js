const express = require("express");
require ("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const multer = require("multer");
const EmployeeModel = require('./models/Employee');
const { ObjectId } = require('mongodb');
const fs = require('fs').promises; // Import the fs modul
// const SerialPort = require('serialport');
// const Readline = require('@serialport/parser-readline');
const app = express();
// const Paient = require('./models/Profile');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const onData = require('./main.js');

let myid;

let patientID;

let data=onData();
let range=data;
console.log(range)
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Constants
//const CONNECTION_STRING = "mongodb+srv://wanjanadep:Kj5316bolf@customers.29nkvpy.mongodb.net/?retryWrites=true&w=majority&appName=Customers";
const CONNECTION_STRING = "mongodb://wanjanadep:Kj5316bolf@ac-xkvabjg-shard-00-00.29nkvpy.mongodb.net:27017,ac-xkvabjg-shard-00-01.29nkvpy.mongodb.net:27017,ac-xkvabjg-shard-00-02.29nkvpy.mongodb.net:27017/?ssl=true&replicaSet=atlas-ak8azu-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Customers";

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
                // Retrieve patientID from MongoDB
    //             database.collection('Paient').findOne({ _id: myid }, (err, result) => {
    //                 if (err) {
    //                     console.error("Error retrieving patientID:", err);
    //                     return;
    //                 }
    //                 if (result) {
    //                     patientID = result.PatientID;

    //                     console.log("Retrieved patientID:", patientID);
    //                 } else {
                    
                        
    //                     console.log("PatientID not found");
    //                 }
    // });
});
});

const predictionRoutes = require('./routes/prediction');
app.use(predictionRoutes);


// Route to handle POST request for form data
app.post('/api/customer/data', (req, res) => {
    // Retrieve data from the request body
    const formData = req.body;
    const data = onData();
    console.log("Line 54 in Server.js", data);
    // Log the received data
    // console.log('Received form data:', formData);
    const predictionModule = require('../Server/controllers/prediction');
  
    predictionModule.detection(req, res, formData, data)
      .then((prediction) => {
        const currentDate = new Date();
        const Year = currentDate.getFullYear();
        const Month = currentDate.getMonth() + 1; // Months are zero indexed, so add 1
        const Day = currentDate.getDate();
        const hour = currentDate.getHours();
        const minute = currentDate.getMinutes();
        const second = currentDate.getSeconds();
        const DateObject = {Object:{ Year, Month, Day }};
        const DateString=`${Year}-${Month}-${Day}`;
        const TimeString=`${hour}:${minute}:${second}`;
        // Insert the prediction into the collection
        database.collection('FinalResult').insertOne(
          { PatientID: patientID, Risk: prediction,AlkaneRange:onData(),ResultID:58,date:DateString,time:TimeString},
          
          (error, result) => {
            if (error) {
              console.error('Error inserting document:', error);
              res.status(500).json({ error: 'An error occurred while inserting the prediction.' });
            } else {
              // Send the prediction back to the client
              res.status(200).json({ message: prediction });
              console.log(prediction);
              console.log(onData());
              ///take the response from here 
            }
          }
        );
        database.collection('MedicalAnylasis').insertOne(
            { PatientID: patientID, Risk: prediction, AlkaneRange: onData(), ResultID: 58, Date:DateObject},

            (error, result) => {
                if (error) {
                    console.error('Error inserting document:', error);
                    res.status(500).json({ error: 'An error occurred while inserting the prediction.' });
                } else {
                    // Send the prediction back to the client
                    console.log(prediction);
                    console.log(onData());
                    ///take the response from here 
                }
            }
        );
    
      })
      .catch((error) => {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while processing the prediction.' });
      });
  });
  
  


app.get('/api/customer/lastResult', async (req, res) => {
     
  
    try {
      // Access the collection where results are stored
      const collection = database.collection('FinalResult');
  
      // Find the last result for the given patient ID, ensuring await for async operation
      const lastResult = await collection.findOne({ PatientID: patientID }, { sort: { _id: -1 }});
  
      if (!lastResult) {
        return res.status(404).json({ message: 'Patient not found or no results available' });
      }
  
      res.json(lastResult);
    } catch (err) {
      console.error("Error retrieving last result:", err); // Log specific error message
      res.status(500).json({ message: 'Internal server error' });
    }
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
        
        const count = await database.collection("FinalResult")
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
        .findOne({ PatientID:patientID}, { projection: { name: 1, _id: 0 } })
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
        .find({ patient_id:patientID}, { projection: {  hospital:1,appointment_date:1,doctor_name: 1, _id: 0 } })
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
        { PatientID: patientID },
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
app.get('/api/patient/AllFinalResults',  (request, response) => {
    database.collection("FinalResult")
        .find({PatientID:patientID})
        .toArray()
        .then(AllResults => {
            response.status(200).json(AllResults);
        })
        .catch(error => {
            console.error("Error retrieving data from MongoDB:", error);
            response.status(500).json({ error: "Could not fetch documents" });
        });
});
app.get('/api/patient/AllFinalResults/count',  (request, response) => {
    database.collection("FinalResult")
        .find({ PatientID: patientID })
        .count()
        .then(count => {
            response.status(200).json({ count });
        })
        .catch(error => {
            console.error("Error retrieving data from MongoDB:", error);
            response.status(500).json({ error: "Could not fetch documents count" });
        });
});
app.get('/api/patient/AllFinalResults/count/positive', async (request, response) => {
    try {
        const count = await database.collection("FinalResult").aggregate([
            {
                $match: {
                    result: "positive",
                    PatientID: patientID // Add PatientID condition here
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
app.get('/api/patient/AllFinalResults/count/negative', async (request, response) => {
    try {
        const count = await database.collection("FinalResult").aggregate([
            {
                $match: {
                    result: "negative",
                    PatientID: patientID // Add PatientID condition here
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

// User signup 

app.post('/signup', async (req, res) => {
    console.log("Line 251");
    const email = req.body.email;
    const password = req.body.password;
    try {
        const existingUser = await database.collection("Paient").findOne({ email: email });
        const userCount = await database.collection("Paient")
        if (existingUser) {
            return res.status(202).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const patientCount = await database.collection("Paient").countDocuments()+1;
        let patientID;

        if(patientCount<10){
            patientID = 'P00'+ patientCount.toString();
        }else{
            patientID = 'P0'+ patientCount.toString();
        }
        await database.collection("Paient").insertOne({
            email: email,
            password: hashedPassword,
            PatientID: patientID,
            name: {FirstName:'User',LastName:patientID},
            Address:null,
            ContactNumber: null,
            ProfilePicture: null,
            BirthDay:null,
            Gender:null,
            Age:null,
            AppointmentID:null,
            DoctorID:null,
        });
        res.status(200).json({ message: 'User profile is created successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }

});

app.post('/login', async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;

    try{
        const existingUser = await database.collection("Paient").findOne({ email: email });
        if (existingUser) {
            if( await bcrypt.compare(password, existingUser.password)){
                const accessToken = jwt.sign({ email: existingUser.email, id: existingUser.PatientID}, 'secret', { expiresIn: "24h" });
                myid = existingUser._id;
                patientID= (existingUser.PatientID);
                console.log(existingUser,myid);
                return res.status(200).json({message: 'User profile is authenticated successfully',token:accessToken,myid:myid});
            }else{
                return res.status(202).json({message: 'User credentials mismatch'});
            }
        }
        return res.status(202).json({ message: 'User profile does not exist. Create an Account' });
    }catch (error){
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/profile', async (req,res) => {

    if(req.body.details === 'General'){

        //const NIC = req.body.NIC;
        const name = req.body.name;
        const address = req.body.Address;
        //const postal_code = req.body.PostalCode;
        const dob = req.body.BirthDay;
        const age = req.body.Age;
        const gender = req.body.Gender;

        try{
        const user = await database.collection("Paient").updateOne({PatientID:req.body.id},
            {
                $set:{
                    name : name,
                    Address : address,
                    BirthDay : dob,
                    Age : age,
                    Gender : gender
                }
            });
        return res.status(200).json({ message: 'Successfully Saved' });
        }catch (error){
            res.status(500).json({ message: 'Detail update was unsuccesful' });
        }

    }else if(req.body.details === 'Credentials'){

        const email = req.body.email;
        const password = req.body.password;
        const hashedPassword = await bcrypt.hash(password, 12);
        try{
        const user = await database.collection("Paient").updateOne({PatientID:req.body.id},
            {
                $set:{
                    email:email,
                    password:hashedPassword
                }
            
            });
        return res.status(200).json({ message: 'Credentials Successfully Updated' });
        }catch(error){
            res.status(500).json({ message: 'Credentials update was unsuccesful' });
        }
    }

});

// app.post('/hardware', async (req,res)=>{

//     const hardwareData = await hardwareDataCatcher;
//     console.log("Line 357 ",hardwareData);
    
// });

app.get('/hardware', (req, res) => {
    data = onData();
    range = data; // Get data from the hardware
    console.log("Line 363 ",data);
    if (data !== null) {
        res.status(200).json({ message: 'Device is connected. Alkane value is read from the device' , data: data });
    } else {
        res.status(404).json({ message: 'Device is not connected. Try again after connecting the device' });
    }
});

// const port = new SerialPort('COM5', { baudRate: 9600 }); // Change the port accordingly

// const parser = port.pipe(new Readline({ delimiter: '\n' }));

// parser.on('data', (data) => {
//   console.log('Arduino Data:', data);
//   // Here you can process the data received from Arduino
// });