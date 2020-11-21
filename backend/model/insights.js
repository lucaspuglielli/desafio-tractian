const mongoose = require('mongoose');

const InsightsSchema = new mongoose.Schema({
    checked: Number,
    pending: Number
})

module.exports = mongoose.model('Insights', InsightsSchema)