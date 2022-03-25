const Model = require("../model/clothesModel");

const getAllClothes = (_req, res) => {
    try {
        const clothContent = Model.getAllData();
        res.status(200).json(clothContent);
    }
    catch {
        res.status(400).json({
          errormessage: `There was an error and we could not find all the data.`,
        });
    }
};

const getClothesByID = (req, res) => {
    try {
        console.log(req.body);
        const makeClothes = Model.getByID(req.body.id);
        console.log(makeClothes);
        res.status(200).json(makeClothes);
    }
    catch {
        res
          .status(201)
          .json({
            errormessage: `There was an error and ${req.body} was not found.`,
          });
    }
}
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
    postClothes,
    getClothesByID
}