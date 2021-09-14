// import dependencies and initialize the express router
const express = require('express');
const CitizenController = require('../controllers/citizen-controller');

const router = express.Router();

// define routes
router
  .route('')
  .get(CitizenController.getCitizen)
  .post(CitizenController.postCitizen);
router.route('/auth').post(CitizenController.authorizeCitizen);

module.exports = router;
