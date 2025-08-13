const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema ({
    message: {type: String, required: true},
    email: {type: String, required: true},
    scheduledDate: {type: Date, required: true},
    sent: { type: Boolean, default: false }
});

module.exports = mongoose.model('data', dataSchema);