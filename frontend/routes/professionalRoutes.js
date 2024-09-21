// routes/professionalRoutes.js
const express = require('express');
const router = express.Router();
const { getProfessionalData } = require('../controller/professionalController');

// Define the route to get professional data
router.get('/', getProfessionalData);

module.exports = router;
