const mongoose = require('mongoose');

const DeviceSchema = mongoose.Schema({
    device:String,
    os: String,
    manufacturer: String,
    lastCheckedOutDate: Date,
    lastCheckedOutBy: String,
    isCheckedOut: { type: Boolean, default: false }
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Devices', DeviceSchema);