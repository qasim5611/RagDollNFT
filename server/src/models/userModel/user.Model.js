import mongoose from "mongoose";

const userModelSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  referral: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  },
  resetToken: {
    token: String,
    expires: Date,
  },
  code: {
    type: String,
  },
  created: {
    type: String,
    default: Date.now,
  },
  passwordReset: Date,
  verificationToken: String,
  acceptTerms: Boolean,
  verified: Date,
  updated: Date,
});

userModelSchema.virtual("isVerified").get(function (){
    return !!(this.verified || this.passwordReset)
})

const userModel = mongoose.model("user", userModelSchema);

export default userModel;