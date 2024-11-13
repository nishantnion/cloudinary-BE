const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db.js");
const videoRoutes = require("./routes/video.js");
const signUploadRoutes = require("./routes/sign-upload.js");
const { errorHandler } = require("./middlewares/error.js");
const mongoose = require("mongoose");
dotenv.config();

// Express App
const port = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/videos", videoRoutes);
app.use("/sign-upload", signUploadRoutes);

// app.use(errorHandler);

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error(err);
  });
// Listen to the requests
app.listen(port, () => {
  // connect to DB
  console.log("Server started listening on port", port);
});
