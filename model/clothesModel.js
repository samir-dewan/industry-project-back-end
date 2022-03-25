const path = require("path");
const pathToclothesJSONfile = path.join(__dirname, "../data/clothes.json");
const uniqid = require('uniqid');
const fs = require('fs');
let Clothes = require(pathToclothesJSONfile);
const helper = require("../helper/api_helper.js");

const readData = (path) => {
  return JSON.parse(fs.readFileSync(path));
};

const writeData = (filename, item) => {
  fs.writeFileSync(filename, JSON.stringify(item), "utf8", (err) => {
    if (err) {
      console.log("there has been an error in writing the data: ", err);
    }
  });
  console.log(`changes ${item} saved to file ${filename}.`);
};

const getAllData = () => {
  let getRooms = readData(pathToclothesJSONfile);
  console.log(getRooms);
  return getRooms;
};

const createNew = (item) => {
    const readList = readData(pathToclothesJSONfile);
    const newItem = {
        id = uniqid(),
        postOnSite = Date(),
        ...item
    };
    readList.push(newItem);
    writeData(path, readList);
    return readList;
}

module.exports = {
    getAllData,
    createNew
}