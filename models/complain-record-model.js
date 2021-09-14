const mongoose = require('mongoose');

const complainRecordSchema = new mongoose.Schema(
  {
    citizen_name: { type: String, required: true },
    citizen_id: { type: String, required: true },
    contact: { type: String, required: true },
    assailant_name: { type: String, required: true },
    event_date: { type: String, required: true },
    event_detail: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ComplainRecord = mongoose.model('ComplainRecord', complainRecordSchema);

module.exports = ComplainRecord;
