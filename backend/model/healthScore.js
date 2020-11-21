const mongoose = require('mongoose');

const HealthScoreSchema = new mongoose.Schema({
    health: { type: Number, required: true},
})

module.exports = mongoose.model('HealthScore', HealthScoreSchema)