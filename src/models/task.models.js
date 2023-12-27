import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: [3, "Too few characters in title."],
      max: [100, "Too many characters in title."],
    },
  },
  {
    timestamps: true,
  }
);

export const task = mongoose.model("Task", taskSchema);
