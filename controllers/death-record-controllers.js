const asyncHandler = require('express-async-handler');
const DeathRecord = require('../models/death-record-model');

exports.saveDeathRecord = asyncHandler(async (req, res) => {
  try {
    const {
      deceased_name,
      gender,
      age,
      died_on,
      death_place,
      birth_country,
      citizen_id,
      permanent_address,
      marital_status,
      education,
      religion,
      grandfather_name,
      father_name,
      spouse_name,
      death_cause,
      informant_name,
      informant_relation,
      informant_address,
    } = req.body;

    const deathDetail = new DeathRecord({
      deceased_name,
      gender,
      age,
      died_on,
      death_place,
      birth_country,
      citizen_id,
      permanent_address,
      marital_status,
      education,
      religion,
      grandfather_name,
      father_name,
      spouse_name: spouse_name || '',
      death_cause,
      informant_name,
      informant_relation,
      informant_address,
    });
    const newDeathRecord = await deathDetail.save();
    res.status(201).json({ status: 'UP', newDeathRecord });
  } catch (error) {
    console.log(error);
  }
});
