// /* ******************************************
//  * This server.js file is the primary file of the 
//  * application. It is used to control the project.
//  *******************************************/
// /* ***********************
//  * Require Statements
//  *************************/
// const express = require("express")
// require("dotenv").config()
// const app = express()
// /*routes */
// /*const lesson1Route = require('./routes/lesson1')*/
// const professionalRoutes = require('./routes/professionalRoutes');

// // Serve static files from the root directory
// app.use(express.static(__dirname + '/public')); // Assuming your index.html is in /public folder

// /*app.use('/', lesson1Route)*/
// // Use the professional routes
// app.use('/professional', professionalRoutes);




// /* ***********************
//  * Local Server Information
//  * Values from .env (environment) file
//  *************************/ 
// const port = process.env.PORT
// const host = process.env.HOST



// /* ***********************
//  * Log statement to confirm server operation
//  *************************/
// app.listen(port, () => {
//   console.log(`Server is running on http://${host}:${port}`)
// })
// const express = require('express');
// const app = express();
// const mongoConnection = require('./database/mongoConnection'); // Import the MongoDB connection file

// // Initialize MongoDB connection
// mongoConnection.initDb((err, db) => {
//   if (err) {
//     console.error('Failed to connect to MongoDB', err);
//     process.exit(1); // Exit the application on failure
//   } else { 
//     console.log('MongoDB connected successfully!');
    
//     // Continue to initialize routes, middleware, etc.
//     const professionalRoutes = require('./routes/professionalRoutes');
//     app.use('/professional', professionalRoutes);

//     const port = process.env.PORT || 8080;
//     //const host = process.env.HOST || 'localhost';
//     app.listen(port, () => {
//       console.log(`Connected to database and running on ${port}`);
//     });
//   }
// });
const express = require('express');
const app = express();
const path = require('path');
const mongoConnection = require('./database/mongoConnection'); // Import the MongoDB connection file

// Serve static files (CSS, JS, etc.) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Initialize MongoDB connection
mongoConnection.initDb((err, db) => {
  if (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Exit the application on failure
  } else { 
    console.log('MongoDB connected successfully!');
    
    // Continue to initialize routes, middleware, etc.
    const professionalRoutes = require('./routes/professionalRoutes');
    app.use('/professional', professionalRoutes);

    // Serve the index.html file for the root path "/"
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

    // Start the server
    const port = process.env.PORT || 8080;
    app.listen(port, () => {
      console.log(`Connected to database and running on http://localhost:${port}`);
    });
  }
});
