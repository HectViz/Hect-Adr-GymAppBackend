// routes/clientes.js

const express = require('express');
const router = express.Router();
const ClientesController = require('../controllers/ClientesController');

router.get('/', ClientesController.listar);
router.get('/:id', ClientesController.obtenerUno);
router.post('/', ClientesController.agregar);
router.put('/:id', ClientesController.actualizar);
router.delete('/:id', ClientesController.eliminar);

module.exports = router;
