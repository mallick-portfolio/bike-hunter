const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const orderSchema = require("../Schema/orderSchema.js");
const Order = mongoose.model("Order", orderSchema);
router.get("/", async (req, res) => {});
router.get("/:email", async (req, res) => {
  try {
    const result = await Order.find({email: req.params.email});
    if (result) {
      res.status(200).json({
        message: "Request Successfull",
        data: result,
      });
    } else {
      console.log('i am from elase')
      res.status(201).json({
        error: "Failed to load Data",
      });
    }
  } catch(err) {
    console.log(err)
    res.status(201).json({
      error: "Failed to load Data",
    });
  }
});
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
