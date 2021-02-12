const Device = require('../models/device.model.js');

// Retrieve and return all devices from the database.
exports.findAll = (req, res) => {
    Device.find()
    .then(devices => {
        console.log(devices)
        res.send(devices);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong while getting list of devices."
        });
    });
};

// Create and Save a new device
exports.create = (req, res) => {
    // Validate request
  
    console.log(req.body)
    if(!req.body) {
        return res.status(400).send({
            message: "Please fill all required field"
        });
    }

    // Create a new device
    const device = new Device({
        device:req.body.device,
        os: req.body.os,
        manufacturer: req.body.manufacturer,
        lastCheckedOutDate: req.body.lastCheckedOutDate,
        lastCheckedOutBy: req.body.lastCheckedOutBy,
        isCheckedOut: req.body.isCheckedOut
    });

    // Save device in the database
    device.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong while creating new device."
        });
    });
};


// Find a single device with a id
exports.findOne = (req, res) => {
    Device.findById(req.params.id)
    .then(device => {
        if(!device) {
            return res.status(404).send({
                message: "Device not found with id " + req.params.id
            });            
        }
        res.send(device);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Device not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error getting device with id " + req.params.id
        });
    });
};

// Update a Device identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Please fill all required field"
        });
    }

    // Find device and update it with the request body
    Device.findByIdAndUpdate(req.params.id, {
        device:req.body.device,
        os: req.body.os,
        manufacturer: req.body.manufacturer,
        lastCheckedOutDate: req.body.lastCheckedOutDate,
        lastCheckedOutBy: req.body.lastCheckedOutBy,
        isCheckedOut: req.body.isCheckedOut
    }, {new: true})
    .then(response => {
        //console.log(response)
        if(!response) {
            return res.status(404).send({
                message: "device not found with id " + req.params.id
            });
        }
        res.send(response);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "device not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error updating device with id " + req.params.id
        });
    });
};

// Delete a Device with the specified id in the request
exports.delete = (req, res) => {
    Device.findByIdAndRemove(req.params.id)
    .then(device => {
        if(!device) {
            return res.status(404).send({
                message: "device not found with id " + req.params.id
            });
        }
        res.send({message: "device deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "device not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete device with id " + req.params.id
        });
    });
};