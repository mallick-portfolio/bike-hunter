const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const handleProduct = require("./routeHandler/handleProduct.js");

const port = process.env.PORT || 5000;
// middleware
app.use(express.json());
app.use(cors());
dotenv.config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.33zshrf.mongodb.net/db_bike?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => console.log("connection successfull"))
  .catch((err) => console.log(err));

app.use("/products", handleProduct);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
