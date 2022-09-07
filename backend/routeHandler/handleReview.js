const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const reviewSchema = require("../Schema/reviewSchema.js");
const Review = mongoose.model("Review", reviewSchema);

router.get("/", async (req, res) => {
  try {
    const result = await Review.find({});
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
