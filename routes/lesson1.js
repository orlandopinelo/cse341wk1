
// Needed Resources 
const express = require("express")
const router = new express.Router() 

const lesson1Controller = require("../controller/lesson1")

/*router.get('/', lesson1Controller.mainroot)*/
router.get('/orlando', lesson1Controller.orlando)
router.get('/ale', lesson1Controller.ale)




const { getProfessionalData } = require('../controllers/professionalController');

// Define the route to get professional data
router.get('/professional', getProfessionalData);

module.exports = router;  