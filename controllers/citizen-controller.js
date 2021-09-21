const asyncHandler = require('express-async-handler');
const Citizen = require('../models/citizen-model');

// get health of application
exports.postCitizen = asyncHandler(async (req, res) => {
  const {
    citizen_name,
    gender,
    birth_place,
    address,
    father_name,
    father_address,
    mother_name,
    mother_address,
    email,
    password,
  } = req.body;

  const citizenDetail = new Citizen({
    citizen_name,
    gender,
    birth_place,
    address,
    father_name,
    father_address,
    mother_name,
    mother_address,
    email,
    password,
  });
  const newCitizen = await citizenDetail.save();
  res.status(201).json({ status: 'UP', success: true, newCitizen });
});

exports.authorizeCitizen = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const citizenData = await Citizen.findOne({
    $and: [{ email }, { password }],
  });

  console.log(citizenData);

  if (citizenData != undefined) {
    res
      .status(200)
      .json({ status: 'UP', success: true, citizenData: citizenData[0] });
  } else {
    res.status(404);
    throw new Error('Record does not exist!');
  }
});

exports.getCitizen = asyncHandler(async (req, res) => {
  const citizen = await Citizen.findById(req.params.id);
  res.status(200).json({
    status: 'UP',
    success: true,
  });
});
