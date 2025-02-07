const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseSchema = new Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  instructor: {
    // primary key
    type: mongoose.Schema.Types.ObjectId,
    // where to connect
    ref: "User",
  },
  students: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model("Course", courseSchema);
