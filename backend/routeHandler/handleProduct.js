const express = require("express");
const mongoose = require("mongoose");
const checkLogin = require("../middleware/checkLogin.js");
const router = express.Router();
const productSchema = require("../Schema/productSchema.js");
const Product = mongoose.model("Product", productSchema);

router.get("/", async (req, res) => {
  try {
    const result = await Product.find({}).skip(0).limit(6);
    if (result) {
      res.status(200).json({
        message: "Successfully data retrive",
        data: result,
      });
    } else {
      res.status(404).json({
        error: "Product Not Found",
      });
    }
  } catch {
    res.status(404).json({
      error: "Product Not Found",
    });
  }
});

router.get("/home", async (req, res) => {
  try {
    const result = await Product.find({}).skip(0).limit(6);
    if (result) {
      res.status(200).json({
        message: "Successfully data retrive",
        data: result,
      });
    } else {
      res.status(404).json({
        error: "Product Not Found",
      });
    }
  } catch {
    res.status(404).json({
      error: "Product Not Found",
    });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const result = await Product.findById({ _id: req.params.id });
    if (result) {
      res.status(200).json({
        message: "Successfully data retrive",
        data: result,
      });
    } else {
      res.status(404).json({
        error: "Product Not Found",
      });
    }
  } catch {
    res.status(404).json({
      error: "Product Not Found",
    });
  }
});

module.exports = router;
