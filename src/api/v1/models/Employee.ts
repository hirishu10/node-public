import mongoose from "mongoose";

const Schema = mongoose.Schema;

const employee = new Schema(
  {
    name: {
      type: String,
    },
    designation: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
      max: 10,
    },
    age: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const Employee = mongoose.model("Employee", employee);
