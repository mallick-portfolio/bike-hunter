const express = require("express");
const mongoose = require("mongoose");
const checkLogin = require("../middleware/checkLogin.js");
const router = express.Router();
const reviewSchema = require("../Schema/reviewSchema.js");
const Review = mongoose.model("Review", reviewSchema);

router.get("/:email", checkLogin, async (req, res) => {
  try {
    const result = await Review.find({ email: req.email });
    if (result) {
      res.status(200).json({
        message: "Request Successfull",
        data: result,
      });
    } else {
      console.log("i am from elase");
      res.status(201).json({
        error: "Failed to load Data",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(201).json({
      error: "Failed to load Data",
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
