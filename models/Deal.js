const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DealSchema = new Schema({
  name: {type: String, required: true},
  amount: {type: String, required: true},
  dateInitiated: {type: Date, required: true},
  dateClosed: {type: Date, required: true},
  stage: {type: String, 
          enum: ["initiated", "qualified", "contract sent", "closed won", "closed lost"], 
          required: true},
  company: { type: Schema.Types.ObjectId, ref: "Company" }
});

const Deal = mongoose.model("Deal", DealSchema);

module.exports = Deal;