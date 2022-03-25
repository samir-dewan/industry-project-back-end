const Model = require("../model/clothesModel");

const getAllClothes = (_req, res) => {
    try {
        const roomContent = Model.getAllData();
        res.status(200).json(roomContent);
    }
    catch {
        res.status(400).json({
          errormessage: `There was an error and we could not find all the data.`,
        });
    }
};

const postClothes = (req, res) => {
    try {
            console.log("in controller");
            console.log(req.body);
            const newClothes = Model.createNew(req.body);
            res.status(201).json(newClothes);
    }
    catch {
        res
          .status(401)
          .json({
            errormessage: `There was an error and ${req.body} was not posted.`,
          });
    }
}

module.exports = {
    getAllClothes,
    postClothes
}