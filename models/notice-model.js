const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema(
  {
    info: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const Notice = mongoose.model('Notice', noticeSchema);

module.exports = Notice;
