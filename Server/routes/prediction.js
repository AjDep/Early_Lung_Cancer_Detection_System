const express = require('express');

const predictionController = require('../controllers/prediction.js');

const router = express.Router();

router.post('/prediction', predictionController.detection);

module.exports = router;
