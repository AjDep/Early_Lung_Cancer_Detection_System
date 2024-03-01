//Contains Mongoose model files defining the schema and methods for interacting with MongoDB collections.

const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  // Add more fields as needed
});

module.exports = mongoose.model('Doctor', doctorSchema);