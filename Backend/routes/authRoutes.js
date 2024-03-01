//Contains route files defining the API endpoints and their corresponding controllers

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Authentication routes
router.post('/register', authController.registerPatient);
// Add other authentication routes like login, etc.

module.exports = router;