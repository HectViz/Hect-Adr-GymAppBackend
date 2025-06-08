const express = require('express');
const router = express.Router();
const PagoController = require('../controllers/PagoController');

router.get('/', PagoController.listar);
router.post('/', PagoController.agregar);

module.exports = router;
