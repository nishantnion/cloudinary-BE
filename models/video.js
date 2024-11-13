// import mongoose from "mongoose";
const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    videoUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const video = mongoose.model("Video", videoSchema);

module.exports = video;
