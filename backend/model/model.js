const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
    description: { type: String, required: true},
    image: { type: String, required: true},
    docs: Number,
    name: { type: String, required: true},
    category: String,
    company: { type: String, required: true},
})

module.exports = mongoose.model('Model', ModelSchema)