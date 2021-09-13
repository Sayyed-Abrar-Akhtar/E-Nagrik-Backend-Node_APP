const asyncHandler = require('express-async-handler');
const Notice = require('../models/notice-model');

exports.postNotice = asyncHandler(async (req, res) => {
  const noticeInfo = req.body.notice;

  const noticeDetail = new Notice({ notice_info: noticeInfo });
  const newNotice = await noticeDetail.save();
  res.status(201).json({ status: 'UP', newNotice });
});

exports.getNotices = asyncHandler(async (req, res) => {
  const notices = await Notice.find({});
  res.status(200).json({ status: 'UP', notices });
});
