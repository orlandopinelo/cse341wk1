/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express")
require("dotenv").config()
const app = express()
/*routes */
/*const lesson1Route = require('./routes/lesson1')*/
const professionalRoutes = require('./routes/professionalRoutes');

// Serve static files from the root directory
app.use(express.static(__dirname + '/public')); // Assuming your index.html is in /public folder

/*app.use('/', lesson1Route)*/
// Use the professional routes
app.use('/professional', professionalRoutes);




/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/ 
const port = process.env.PORT
const host = process.env.HOST



/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`)
})