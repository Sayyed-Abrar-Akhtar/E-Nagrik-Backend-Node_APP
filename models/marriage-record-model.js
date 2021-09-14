const mongoose = require('mongoose');

const marriageRecordSchema = new mongoose.Schema(
  {
    bridegroom_name: { type: String, required: true },
    bride_name: { type: String, required: true },
    bridegroom_dob: { type: String, required: true },
    bride_dob: { type: String, required: true },
    bridegroom_citizenship_num: { type: String, required: true },
    bride_citizenship_num: { type: String, required: true },
    bridegroom_permanent_address: { type: String, required: true },
    bride_permanent_address: { type: String, required: true },
    bridegroom_father_name: { type: String, required: true },
    bride_father_name: { type: String, required: true },
    bridegroom_mother_name: { type: String, required: true },
    bride_mother_name: { type: String, required: true },
    bridegroom_grandfather_name: { type: String, required: true },
    bride_grandfather_name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const MarriageRecord = mongoose.model('MarriageRecord', marriageRecordSchema);

module.exports = MarriageRecord;
