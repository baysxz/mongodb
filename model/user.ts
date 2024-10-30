import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, required: true },
  firstName: { type: String },
  password: { type: String, min: 8 },
  phoneNumber: { type: String, min: 8 },
  role: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
