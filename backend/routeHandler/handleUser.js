const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const userSchema = require("../Schema/userSchema.js");
const User = mongoose.model("User", userSchema);
const jwt = require("jsonwebtoken");
router.get("/", async (req, res) => {
  try {
    const result = await User.find({});
    if (result && result.length > 0) {
      res.status(200).json({
        message: "successfully",
        data: result,
      });
    } else {
      res.status(204).status({
        error: "Failed to load user",
      });
    }
  } catch {
    res.status(204).status({
      error: "Failed to load user",
    });
  }
});

router.put("/:email", async (req, res) => {
  try {
    const filter = { email: req.params.email };
    let name;
    if (req.body.name !== null) {
      name = req.body.name;
    }
    const update = {
      name,
      email: req.params.email,
      role: req.body.role,
      image: "",
    };
    let result = await User.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true,
    });
    if (result._id) {
      const token = jwt.sign(
        {
          userName: req.body.name,
          email: req.params.email,
        },
        process.env.JSON_WEB_TOKEN
      );
      res.status(200).json({
        message: "Successfully",
        token,
      });
    }
  } catch (err) {
    res.status(204).json({
      error: "Authentication Failed",
    });
  }
});

module.exports = router;
