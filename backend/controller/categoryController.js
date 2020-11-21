// const Units = require("../model/units");
const assetsData = require("../model/assetsData");
const Category = require("../model/category")

const create = async (req, res) => {
    let dados = req.body;
    let foundAssetsData = await assetsData.findById(req.params.assetsDataId);
    if (!foundAssetsData) {
        return res.status(404).json("Assets Data não encontrada");
    }
    let newCategory = new Category(dados);
    let savedNewCategory = await newCategory.save();
    foundAssetsData.category = savedNewCategory;
    await foundAssetsData.save();
    res.status(200).json(foundAssetsData);
};

const read = async (req, res) => {
    assetsData.findOne({ _id: req.params.assetsDataId })
        .populate("assetsData") // key to populate
        .then((assetsData) => {
            res.json(assetsData);
        });
};

module.exports = { create, read };
