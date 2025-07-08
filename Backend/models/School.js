// models/School.js
import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point"
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
});

schoolSchema.index({ location: "2dsphere" });

const School = mongoose.model("School", schoolSchema);

export default School;
