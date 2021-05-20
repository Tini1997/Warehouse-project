const express = require('express');
const router = new express.Router();
router.use('/product', require('./product'));

router.use('/upload', express.static('upload'));

module.exports = router; 