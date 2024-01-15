import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: [true, "Please enter your First Name"] },
  lastName: { type: String, required: [true, "Please enter your Last Name"] },
  email: {
    type: String,
    required: [true, "Please enter your Email Address"],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "Please enter your Phone Number"],
    unique: true,
  },
  password: { type: String, required: [true, "Please enter a Password"] },

  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry:Date,
  verifyToken: String,
  verifyTokenExpiry:Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
