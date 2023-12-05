const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
   activity: {
        type: String,
        required: true
   },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('activity', activitySchema);