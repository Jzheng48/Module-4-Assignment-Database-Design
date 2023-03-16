const express = require('express')
const router = express.Router();
const customerController = require('../controllers/customerController')


router.route('/')
.get(customerController.getData)
.post(customerController.postData);

router.route('/:id')
.get(customerController.getDataById)
.patch(customerController.patchDataById)
.delete(customerController.deleteDataById);

module.exports = router
