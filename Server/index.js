const express= require("express")
const mongoose =require("mongoose")
const cors=require("cors")
const EmployeeModel= require('./models/Employee')
const PatientModel=require('./models/Patient')
const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Hopefinder");
app.listen(3001,()=>{
    console.log("Server is fucking running")
})

app.post('/api/Customer/AddNotes', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees =>res.json(employees))
    .catch(err=>res.json(err))
 
 });
 app.post('/api/Patient/AddNotes', (req, res) => {
    PatientModel.create(req.body)
        .then(patient => res.json(patient))
        .catch(err => res.json(err));
 
 });
