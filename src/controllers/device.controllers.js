const Device = require('../models/device.model.js');

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    Device.find()
    .then(devices => {
        console.log(devices)
        res.send(devices);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong while getting list of users."
        });
    });
};

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
  
    console.log(req.body)
    if(!req.body) {
        return res.status(400).send({
            message: "Please fill all required field"
        });
    }

    // Create a new User
    const device = new Device({
        device:req.body.device,
        os: req.body.os,
        manufacturer: req.body.manufacturer,
        lastCheckedOutDate: req.body.lastCheckedOutDate,
        lastCheckedOutBy: req.body.lastCheckedOutBy,
        isCheckedOut: req.body.isCheckedOut
    });

    // Save user in the database
    device.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong while creating new user."
        });
    });
};
