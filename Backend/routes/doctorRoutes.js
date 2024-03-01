//Contains route files defining the API endpoints and their corresponding controllers

const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const { verifyToken } = require('../middleware/authMiddleware');

// Doctor routes
router.get('/', verifyToken, doctorController.getAllDoctors);
// Add other doctor routes like get by id, update, etc.

module.exports = router;