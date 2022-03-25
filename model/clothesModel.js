const path = require("path");
const pathToclothesJSONfile = path.join(__dirname, "../data/clothing.json");
const uniqid = require('uniqid');
const fs = require('fs');
let clothes = require(pathToclothesJSONfile);

const readData = (path) => {
  return JSON.parse(fs.readFileSync(path));
};

const writeData = (item) => {
  fs.writeFileSync(pathToclothesJSONfile, JSON.stringify(item), "utf8", (err) => {
    if (err) {
      console.log("there has been an error in writing the data: ", err);
    }
  });
  console.log(`changes ${item} saved to file.`);
};

const getAllData = () => {
  let getRooms = readData(pathToclothesJSONfile);
  console.log(getRooms);
  return getRooms;
};

const createNew = (item) => {
    const readList = readData(pathToclothesJSONfile);
    const newItem = {
        id: uniqid(),
        postOnSite: Date(),
        ...item,
    };
    console.log("newitem made");
    readList.push(newItem);
    console.log("item pushed");
    writeData(readList);
    console.log("posted to list");
    return readList;
}

const getByID = (id) => {
    console.log("in the model");
    const currCloth = clothes.find((cloth) => cloth.id === id);
    console.log(currCloth);
    return currCloth;
}

module.exports = {
    getAllData,
    createNew,
    getByID
}