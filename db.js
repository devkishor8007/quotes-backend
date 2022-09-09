const mongoose = require("mongoose");
const { MONGODB_URL } = require("./config");

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("mongodb is connected!!");
  })
  .catch((e) => {
    console.log("mongodb is not connected!!");
  });
