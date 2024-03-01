//Contains Mongoose model files defining the schema and methods for interacting with MongoDB collections.

const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  // Add more fields as needed
});

module.exports = mongoose.model('Patient', patientSchema);