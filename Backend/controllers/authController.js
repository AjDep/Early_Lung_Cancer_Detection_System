//Handles authentication related logic

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Patient = require('../models/patientModel');
const Doctor = require('../models/doctorModel');

// Authentication logic
// Example: Register patient
exports.registerPatient = async (req, res) => {
  try {
    const { name, age, email, password } = req.body;
    // Check if patient with same email exists
    const existingPatient = await Patient.findOne({ email });
    if (existingPatient) {
      return res.status(400).json({ message: 'Patient with this email already exists' });
    }
    // Create new patient
    const patient = new Patient({ name, age, email, password });
    await patient.save();
    res.status(201).json({ message: 'Patient registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};