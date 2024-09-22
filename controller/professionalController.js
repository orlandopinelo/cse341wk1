// // controllers/professionalController.js
// const professionalData = require('../models/professionalModel');

// // Function to handle the GET request
// const getProfessionalData = (req, res) => {
//   res.json(professionalData);
// };

// module.exports = { getProfessionalData };

const mongoConnection = require('../database/mongoConnection');

// Example usage in a controller
const getProfessionalData = async (req, res) => {
  try {
    const db = mongoConnection.getDb(); // Get the database connection
    const professionals = await db.collection('user').findOne(); // Query the collection
    res.json(professionals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching professional data', error });
  }
};

module.exports = { getProfessionalData };