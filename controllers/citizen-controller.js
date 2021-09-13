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

  console.log(gender);

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

  console.log('In controller - postCitizen');
  res.status(200).json({
    status: 'UP',
  });
});

exports.authorizeCitizen = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
});

exports.getCitizen = asyncHandler(async (req, res) => {
  const citizen = await Citizen.findById(req.params.id);
  res.status(200).json({
    status: 'UP',
  });
});
