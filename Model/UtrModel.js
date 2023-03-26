const mongoose = require("mongoose");

const utrSchema = new mongoose.Schema({
  utr: { type: String, required: true },
  reg_id: { type: Number, required: false },
});

const Utr = mongoose.model("utr", utrSchema);
module.exports = Utr