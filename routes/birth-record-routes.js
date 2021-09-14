// import dependencies and initialize the express router
const express = require('express');
const BirthRecordController = require('../controllers/birth-record-controllers');

const router = express.Router();

router.route('/').post(BirthRecordController.saveBirthRecord);

module.exports = router;
