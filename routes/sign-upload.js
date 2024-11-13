// import express from "express";
// import { generateSignature } from "../controllers/sign-upload.js";
const express = require("express");

const generateSignature = require("../controllers/sign-upload");

const router = express.Router();

// http://localhost:5000/api/sign-upload
router.post("/", generateSignature.generateSignature);

module.exports = router;
