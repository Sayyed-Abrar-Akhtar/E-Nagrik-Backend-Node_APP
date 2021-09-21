const asyncHandler = require('express-async-handler');
const MarriageRecord = require('../models/marriage-record-model');

exports.saveMarriageRecord = asyncHandler(async (req, res) => {
  const {
    bridegroom_name,
    bride_name,
    bridegroom_dob,
    bride_dob,
    bridegroom_citizenship_num,
    bride_citizenship_num,
    bridegroom_permanent_address,
    bride_permanent_address,
    bridegroom_father_name,
    bride_father_name,
    bridegroom_mother_name,
    bride_mother_name,
    bridegroom_grandfather_name,
    bride_grandfather_name,
  } = req.body;

  const marriageDetail = new MarriageRecord({
    bridegroom_name,
    bride_name,
    bridegroom_dob,
    bride_dob,
    bridegroom_citizenship_num,
    bride_citizenship_num,
    bridegroom_permanent_address,
    bride_permanent_address,
    bridegroom_father_name,
    bride_father_name,
    bridegroom_mother_name,
    bride_mother_name,
    bridegroom_grandfather_name,
    bride_grandfather_name,
  });
  const newMarriageRecord = await marriageDetail.save();
  res.status(201).json({ status: 'UP', success: true, newMarriageRecord });
});
