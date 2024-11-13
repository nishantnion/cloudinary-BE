// import express from "express";
// import { createVideo } from "../controllers/video.js";
const express = require("express");
const { createVideo } = require("../controllers/video.js");

const router = express.Router();

// http://localhost:5000/api/videos/
router.post("/", createVideo);

module.exports = router;
