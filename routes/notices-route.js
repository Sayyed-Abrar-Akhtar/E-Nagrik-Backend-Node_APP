// import dependencies and initialize the express router
const express = require('express');
const NoticeController = require('../controllers/notices-controller');

const router = express.Router();

// define routes
router
  .get('', NoticeController.getNotices)
  .post('', NoticeController.postNotice);

module.exports = router;
