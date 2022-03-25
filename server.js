const express = require("express");
const app = express();
const Clothes = require("./view/clothesView");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/", Clothes);