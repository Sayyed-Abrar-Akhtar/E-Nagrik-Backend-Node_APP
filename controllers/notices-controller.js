const asyncHandler = require('express-async-handler');
const Notice = require('../models/notice-model');

exports.postNotice = asyncHandler(async (req, res) => {
  const info = req.body.info;

  const noticeDetail = new Notice({ info });
  const newNotice = await noticeDetail.save();
  res.status(201).json({ status: 'UP', newNotice });
});

exports.getNotices = asyncHandler(async (req, res) => {
  const notices = await Notice.find({}).sort({ createdAt: -1 }).limit(3);
  res.status(200).json({ status: 'UP', notices });
});

exports.getAllNotices = asyncHandler(async (req, res) => {
  const notices = await Notice.find({}).sort({ createdAt: -1 });
  res.status(200).json({ status: 'UP', notices });
});
