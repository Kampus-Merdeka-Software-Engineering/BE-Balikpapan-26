const express = require('express');
const { testiController } = require('../controllers');
const router = express.Router();

// get all testi
router.get('/testi', testiController.getTestim);
router.post('/testi', testiController.createTesti);



module.exports = router;