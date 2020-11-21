const Units = require("../model/units");

const create = async (req, res) => {
    let dados = req.body;
    let newUnit = new Units(dados);
    let savedUnit = await newUnit.save();
    // const resp = await Units.create(dados);
    res.status(200).json(savedUnit);
};

module.exports = { create };
