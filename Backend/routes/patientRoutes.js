//Contains route files defining the API endpoints and their corresponding controllers

const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const { verifyToken } = require('../middleware/authMiddleware');

// Patient routes
router.get('/', verifyToken, patientController.getAllPatients);
// Add other patient routes like get by id, update, etc.

module.exports = router;