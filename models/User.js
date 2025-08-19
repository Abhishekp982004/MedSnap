import mongoose from "mongoose"; // Use ES module import

// Appointment Schema
const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
});

// User Schema
const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  appointments: [appointmentSchema], // Array of Appointment subdocuments
});

// Creating Mongoose Model
const User = mongoose.model("User", userSchema);

export default User; // Export as ES Module
