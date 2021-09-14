const asyncHandler = require('express-async-handler');
const BirthRecord = require('../models/birth-record-model');

exports.saveBirthRecord = asyncHandler(async (req, res) => {
  const {
    child_name,
    gender,
    dob,
    birth_place,
    permanent_address,
    grandfather_name,
    father_id,
    father_name,
    mother_id,
    mother_name,
    informant_id,
    informant_name,
  } = req.body;

  const childDetail = new BirthRecord({
    child_name,
    gender,
    dob,
    birth_place,
    permanent_address,
    grandfather_name,
    father_id,
    father_name,
    mother_id,
    mother_name,
    informant_id,
    informant_name,
  });
  const newBirthRecord = await childDetail.save();
  res.status(201).json({ status: 'UP', newBirthRecord });
});
