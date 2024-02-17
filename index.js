require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const router = require("./routes/index");
// const errorHandler = require("./middleware/ErrorHandling");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "images")));
app.use(fileUpload({}));
app.use("/api", router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.error(e.message);
  }
};
start();
