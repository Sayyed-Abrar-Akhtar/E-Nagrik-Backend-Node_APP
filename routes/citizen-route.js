// import dependencies and initialize the express router
const express = require('express');
const CitizenController = require('../controllers/citizen-controller');

const router = express.Router();

// define routes
router
  .get('', CitizenController.getCitizen)
  .post('', CitizenController.postCitizen);

module.exports = router;
