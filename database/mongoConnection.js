

// const mongoDBIP = '192.168.1.71';
// const mongoDBPort = 27017;

// MongoDB connection string
// const mongoURL = `mongodb://<mongo admin>:<password>@${mongoDBIP}:${mongoDBPort}/?authSource=admin`;

const dotenv = require('dotenv')
dotenv.config()
const MongoClient = require('mongodb').MongoClient;

let _db;

/**
 * Initialize the MongoDB connection.
 * @param {function} callback - Callback to handle success or error.
 */
const initDb = (callback) => {
  if (_db) {
    console.log('Database is already initialized!');
    return callback(null, _db);
  }

  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      _db = client.db(); // Set the database client
      console.log('Database initialized');
      callback(null, _db); // Return the initialized database
    })
    .catch((err) => {
      console.error('Failed to initialize database:', err);
      callback(err);
    });
};

/**
 * Get the initialized database object.
 * @returns {object} The MongoDB client object.
 * @throws Error if the database is not initialized.
 */
const getDb = () => {
  if (!_db) {
    throw new Error('Database not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};
