const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    countAssets: Number,
    inUse: { type: Number, required: true},
    avaliable: { type: Number, required: true},
    onAlert: Number,
    underMaintenance: { type: Number, required: true},
    insightsPending: Number,
    insightsChecked: Number,
    assetsData: {type: mongoose.Schema.Types.ObjectId, ref:"AssetsData"}
})

module.exports = mongoose.model('Data', DataSchema)