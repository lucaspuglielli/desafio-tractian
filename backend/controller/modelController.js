const Units = require("../model/units");
const Data = require("../model/data");

const create = async (req, res) => {
    let dados = req.body;
    let foundUnit = await Units.findById(req.params.unitId);
    if (!foundUnit) {
        return res.status(404).json("Unidade não encontrada");
    }
    let newData = new Data(dados);
    let savedNewData = await newData.save();
    foundUnit.data = savedNewData;
    await foundUnit.save();
    res.status(200).json(foundUnit);
};

const read = async (req, res) => {
    Units.findOne({ _id: req.params.unitId })
        .populate("data") // key to populate
        .then((Data) => {
            res.json(Data);
        });
};

module.exports = { create, read };
