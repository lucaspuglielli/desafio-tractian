const mongoose = require('mongoose');

const UnitsSchema = new mongoose.Schema({
    name: String,
    data: {type: mongoose.Schema.Types.ObjectId, ref:"Data"}
})

module.exports = mongoose.model('Unit', UnitsSchema)