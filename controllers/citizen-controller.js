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
  res.status(201).json({ status: 'UP', newCitizen });
});

exports.authorizeCitizen = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const citizenData = await Citizen.find({ email: email });

  console.log(citizenData);
  if (citizenData[0] != undefined) {
    res.status(200).json({ status: 'UP', citizenData: citizenData[0] });
  } else {
    res.status(404);
    throw new Error('Record does not exist!');
  }
});

exports.getCitizen = asyncHandler(async (req, res) => {
  const citizen = await Citizen.findById(req.params.id);
  res.status(200).json({
    status: 'UP',
  });
});
