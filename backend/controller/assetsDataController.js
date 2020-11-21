const Data = require("../model/data");
const assetsData = require("../model/assetsData");

const create = async (req, res) => {
    let dados = req.body;
    let foundData = await Data.findById(req.params.dataId);
    if (!foundData) {
        return res.status(404).json("Unidade não encontrada");
    }
    let newAssetsData = new assetsData(dados);
    let savedAssetsNewData = await newAssetsData.save();
    foundData.assetsData = savedAssetsNewData;
    await foundData.save();
    res.status(200).json(foundData);
};

const read = async (req, res) => {
    Data.findOne({ _id: req.params.dataId })
        .populate("assetsData")
        .then((assetsData) => {
            res.json(assetsData);
        });
};

module.exports = { create, read };
