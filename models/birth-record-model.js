const mongoose = require('mongoose');

const birthRecordSchema = new mongoose.Schema(
  {
    child_name: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: String, required: true },
    birth_place: { type: String, required: true },
    permanent_address: { type: String, required: true },
    grandfather_name: { type: String, required: true },
    father_id: { type: String, required: true },
    father_name: { type: String, required: true },
    mother_id: { type: String, required: true },
    mother_name: { type: String, required: true },
    informant_id: { type: String, required: true },
    informant_name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const BirthRecord = mongoose.model('BirthRecord', birthRecordSchema);

module.exports = BirthRecord;
