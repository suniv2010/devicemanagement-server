const express = require('express')
const router = express.Router()
const deviceController = require('../controllers/device.controllers');

// Retrieve all device
router.get('/', deviceController.findAll);


// Create a new device
router.post('/', deviceController.create);

// Retrieve a single device with id
router.get('/:id', deviceController.findOne);

// Update a device with id
router.put('/:id', deviceController.update);

// Delete a device with id
router.delete('/:id', deviceController.delete);

module.exports = router



module.exports = router