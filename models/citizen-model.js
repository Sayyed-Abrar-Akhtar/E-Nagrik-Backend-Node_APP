const mongoose = require('mongoose');

const citizenSchema = new mongoose.Schema(
  {
    citizen_name: { type: String, required: true },
    gender: { type: String, required: true },
    birth_place: { type: String, required: true },
    address: { type: String, required: true },
    father_name: { type: String, required: true },
    father_address: { type: String, required: true },
    mother_name: { type: String, required: true },
    mother_address: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Citizen = mongoose.model('Citizen', citizenSchema);

module.exports = Citizen;
