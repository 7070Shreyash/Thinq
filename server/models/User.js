import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    picturePath: {
      type: String,
      default: "",
    },
    location: String,
    occupation: String,
    questionAsked: {
        type : Number,
        default : 0
    },
    reputation: {
        type : Number,
        default : 1500,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
