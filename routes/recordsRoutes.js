const express = require('express')
const router = express.Router()
const {getUserRecords} = require('../controllers/recordsController');
router.get('/users/:userId/records',getUserRecords);

module.exports = router
