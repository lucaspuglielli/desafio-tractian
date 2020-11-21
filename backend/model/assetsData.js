const mongoose = require("mongoose");

const AssetsDataSchema = new mongoose.Schema({
    insights: { type: mongoose.Schema.Types.ObjectId, ref: "Insights" },
    maintenances: Number,
    name: String,
    startup: String,
    company: String,
    model: { type: mongoose.Schema.Types.ObjectId, ref: "Model" },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    description: String,
    healthscore: { type: mongoose.Schema.Types.ObjectId, ref: "HealthScore" },
},
{ timestamps: true }
);

module.exports = mongoose.model("AssetsData", AssetsDataSchema);
