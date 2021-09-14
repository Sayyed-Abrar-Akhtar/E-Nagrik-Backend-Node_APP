// import dependencies and initialize the express router
const express = require('express');
const ComplainRecordController = require('../controllers/complain-record-controllers');

const router = express.Router();

router.route('/').post(ComplainRecordController.saveComplainRecord);

module.exports = router;
