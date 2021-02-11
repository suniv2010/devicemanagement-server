const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 4000;

// Configuring the database
const dbConfig = require('./config/db.config.js');


// Require Users routes
const deviceRoutes = require('./src/routes/device.routes')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// using as middleware
app.use('/devices', deviceRoutes)

// listen for requests
app.listen(port, () => {
    console.log(`Node server is listening on port ${port}`);
});