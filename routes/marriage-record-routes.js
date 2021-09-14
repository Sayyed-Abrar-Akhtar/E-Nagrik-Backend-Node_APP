// import dependencies and initialize the express router
const express = require('express');
const MarriageRecordController = require('../controllers/marriage-record-controllers');

const router = express.Router();

router.route('/').post(MarriageRecordController.saveMarriageRecord);

module.exports = router;
