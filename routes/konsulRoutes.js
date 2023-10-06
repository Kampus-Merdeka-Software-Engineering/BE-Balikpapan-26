const express = require('express');
const { konsulController } = require('../controllers');
const router = express.Router();

// get all books
router.get('/konsuls', konsulController.getKonsul);
router.post('/konsuls', konsulController.createKonsul);



module.exports = router;