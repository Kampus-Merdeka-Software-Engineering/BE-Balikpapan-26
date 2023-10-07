const express = require('express');
const { konsulController } = require('../controllers');
const router = express.Router();

// get all books
router.get('/konsul', konsulController.getKonsuls);
router.post('/konsul', konsulController.createKonsul);



module.exports = router;