const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController.js');

router.post('/customers', customerController.addCustomer);
router.get('/customers', customerController.getCustomers);

module.exports = router;
