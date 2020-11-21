const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: String,
    description: String,
    company: String,
})


module.exports = mongoose.model('Category', CategorySchema)