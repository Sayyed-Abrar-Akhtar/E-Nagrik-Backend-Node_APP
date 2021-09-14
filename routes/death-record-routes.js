// import dependencies and initialize the express router
const express = require('express');
const DeathRecordController = require('../controllers/death-record-controllers');

const router = express.Router();

router.route('/').post(DeathRecordController.saveDeathRecord);

module.exports = router;
