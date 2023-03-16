const express = require('express')
const router = express.Router();
const loanledgerController = require('../controllers/loanledgerController')


router.route('/')
.get( loanledgerController.getData)
.post(loanledgerController.postData);

router.route('/:id')
.get(loanledgerController.getDataById)
.patch(loanledgerController.patchDataById)
.delete(loanledgerController.deleteDataById);

module.exports = router
