const express = require('express');
const router = express.Router();
const destinatarioController = require('../controllers/destinatarioController')


router.post('/', destinatarioController.crearDestinatario);
router.get('/', destinatarioController.obtenerDestinatario);
router.delete('/:id', destinatarioController.eliminarDestinatario);


module.exports = router;