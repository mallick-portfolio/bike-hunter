const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const orderSchema = require("../Schema/orderSchema.js");
const Order = mongoose.model("Order", orderSchema);
router.get("/", async (req, res) => {});
router.post("/", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const result = await newOrder.save();
    if (result._id) {
      res.status(201).json({
        message: "Order Successfully",
        result,
      });
    } else {
      res.status(409).json({
        error: "Failed to Order",
      });
    }
  } catch {
    res.status(409).json({
      error: "Failed to Order",
    });
  }
});
module.exports = router;
