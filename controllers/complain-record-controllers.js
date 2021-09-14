const asyncHandler = require('express-async-handler');
const ComplainRecord = require('../models/complain-record-model');

exports.saveComplainRecord = asyncHandler(async (req, res) => {
  const {
    citizen_name,
    citizen_id,
    contact,
    assailant_name,
    event_date,
    event_detail,
  } = req.body;

  const complainDetail = new ComplainRecord({
    citizen_name,
    citizen_id,
    contact,
    assailant_name,
    event_date,
    event_detail,
  });
  const newComplainRecord = await complainDetail.save();
  res.status(201).json({ status: 'UP', newComplainRecord });
});
