const mongoose = require("mongoose");

const quoteSchema = mongoose.Schema({
  category: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
    unique: true,
  },
  by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Quote", quoteSchema);
