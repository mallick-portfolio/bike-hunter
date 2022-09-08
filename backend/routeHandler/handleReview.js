const express = require("express");
const mongoose = require("mongoose");
const checkLogin = require("../middleware/checkLogin.js");
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
router.post("/", checkLogin, async (req, res) => {
  try {
    if (req.email === req.body.email) {
      const newReview = new Review(req.body);
      const result = await newReview.save();
      if (result._id) {
        res.status(201).json({
          message: "Review Successfully",
          result,
        });
      } else {
        res.status(409).json({
          error: "Failed to Review",
        });
      }
    } else {
      res.status(409).json({
        error: "Failed to Review",
      });
    }
  } catch {
    res.status(409).json({
      error: "Failed to Review",
    });
  }
});
module.exports = router;
