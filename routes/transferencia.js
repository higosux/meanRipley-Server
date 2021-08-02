const express = require('express');
const router = express.Router();
const transferenciaController = require('../controllers/transferenciaController')

router.post('/', transferenciaController.transferir);



module.exports = router;