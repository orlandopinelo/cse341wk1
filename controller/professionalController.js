// controllers/professionalController.js
const professionalData = require('../models/professionalModel');

// Function to handle the GET request
const getProfessionalData = (req, res) => {
  res.json(professionalData);
};

module.exports = { getProfessionalData };
