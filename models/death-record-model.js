const mongoose = require('mongoose');

const deathRecordSchema = new mongoose.Schema(
  {
    deceased_name: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: String, required: true },
    died_on: { type: String, required: true },
    death_place: { type: String, required: true },
    birth_country: { type: String, required: true },
    citizen_id: { type: String, required: true, unique: true },
    permanent_address: { type: String, required: true },
    marital_status: { type: String, required: true },
    education: { type: String, required: true },
    religion: { type: String, required: true },
    grandfather_name: { type: String, required: true },
    father_name: { type: String, required: true },
    spouse_name: { type: String },
    death_cause: { type: String, required: true },
    informant_name: { type: String, required: true },
    informant_relation: { type: String, required: true },
    informant_address: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const DeathRecord = mongoose.model('DeathRecord', deathRecordSchema);

module.exports = DeathRecord;
