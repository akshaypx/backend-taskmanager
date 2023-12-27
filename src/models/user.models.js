import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      required: [true, "Username is a required field."],
      type: String,
      lowercase: [true, "Username should be in lowercase."],
      unique: [true, "Similar username exists."],
      min: [4, "Atleast 4 characters required."],
      max: [16, "Atmax 16 characters are allowed."],
    },
    email: {
      required: [true, "Email is a required field."],
      type: String,
      lowercase: [true, "Email should be in lowercase."],
      unique: [true, "Similar Email exists."],
      min: [4, "Atleast 4 characters required."],
      max: [50, "Atmax 50 characters are allowed."],
    },
    password: {
        required: [true, "Password is a required field."],
        type: String,
        min: [8, "Atleast 8 characters are required."],
        max: [50, "Atmax 50 characters are allowed."],
    }
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
