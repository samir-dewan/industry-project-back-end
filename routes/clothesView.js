const express = require("express");
const router = express.Router();
const Controller = require("../controller/loginController");

router.get("/wash", Controller.getAllClothes);
router.post("/newclothes", Controller.createClothes); //gives back an id, that id will be used for the userid.

module.exports = router;
