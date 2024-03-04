const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide Company Name"],
      maxlength: 50,
    },
    postition: {
      type: String,
      required: [true, "Please provide Position"],
      maxlength: 100,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["interview", "declined", "pending"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please Provide User"],
    },
  },
  { timestamps: true }
);

exports.default = mongoose.model("Job", JobSchema);
