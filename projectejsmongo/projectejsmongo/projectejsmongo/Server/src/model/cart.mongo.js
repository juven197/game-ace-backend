const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
  },
  itemPrice: {
    type: Number,
  },
  itemCount: {
    type: Number,
  },
  pictureLink: {
    type: String,
  },
});

module.exports = mongoose.model("item", itemSchema);
