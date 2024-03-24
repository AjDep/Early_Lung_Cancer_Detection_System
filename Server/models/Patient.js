const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
    No: String,
    Lane: String,
    City: String,
    District: String,
    Country: String
});

const BirthDaySchema = new mongoose.Schema({
    Year: Number,
    Month: Number,
    Date: Number,
    Gender: String,
    Age: Number // Assuming age is calculated based on birth date
});

const PatientSchema = new mongoose.Schema({
    Patient_id: Number,
    name: String,
    Address: AddressSchema,
    ContactNumber: String,
    ProfilePicture: String,
    BirthDay: BirthDaySchema,
    AppoinmentID: Number,
    DoctorID: Number
});

const PatientModel = mongoose.model("Patient", PatientSchema);

module.exports = PatientModel;
