const express = require("express");
const app = express();
const Clothes = require("./routes/clothesView");
const cors = require("cors");
const PORT = 5050;

app.use(cors());
app.use(express.json());

app.use("/", Clothes);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});