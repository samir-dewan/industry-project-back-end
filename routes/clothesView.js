const express = require("express");
const router = express.Router();
const Controller = require("../controller/clothesController");

router.get("/wash", Controller.getAllClothes);
router.post("/newclothes", Controller.postClothes); //gives back an id, that id will be used for the userid.
router.get("/item/:id", Controller.getClothesByID);

module.exports = router;
