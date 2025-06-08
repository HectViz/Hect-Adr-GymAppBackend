const express = require('express');
const router = express.Router();
const MembresiasController = require('../controllers/MembresiasController');

router.get('/', MembresiasController.listar);
router.get('/:id', MembresiasController.obtenerUna);
router.post('/', MembresiasController.agregar);
router.put('/:id', MembresiasController.actualizar);
router.delete('/:id', MembresiasController.eliminar);

module.exports = router;
