const express = require('express')
const router = express.Router()
const deviceController = require('../controllers/device.controllers');

// Retrieve all users
router.get('/', deviceController.findAll);


// Create a new user
router.post('/', deviceController.create);



module.exports = router