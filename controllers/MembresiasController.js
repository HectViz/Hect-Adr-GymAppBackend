const { membresias } = require('../models/data');

class MembresiasController {
  // GET /membresias
  listar(req, res) {
    res.render('membresias/listar', { membresias });
  }

  // GET /membresias/:id
  obtenerUna(req, res) {
    const id = parseInt(req.params.id);
    const membresia = membresias.find(m => m.id === id);

    if (!membresia) {
      return res.status(404).send('Membresía no encontrada');
    }

    res.render('membresias/detalle', { membresia });
  }

  // POST /membresias
  agregar(req, res) {
    const nueva = {
      id: membresias.length + 1,
      clienteId: parseInt(req.body.clienteId),
      tipo: req.body.tipo,
      fechaInicio: req.body.fechaInicio,
      fechaVencimiento: req.body.fechaVencimiento
    };

    membresias.push(nueva);
    res.status(201).json({ mensaje: 'Membresía agregada' });
  }

  // PUT /membresias/:id
  actualizar(req, res) {
    const id = parseInt(req.params.id);
    const membresia = membresias.find(m => m.id === id);

    if (!membresia) {
      return res.status(404).send('Membresía no encontrada');
    }

    membresia.tipo = req.body.tipo;
    membresia.fechaInicio = req.body.fechaInicio;
    membresia.fechaVencimiento = req.body.fechaVencimiento;

    res.send('Membresía actualizada');
  }

  // DELETE /membresias/:id
  eliminar(req, res) {
    const id = parseInt(req.params.id);
    const index = membresias.findIndex(m => m.id === id);

    if (index === -1) {
      return res.status(404).send('Membresía no encontrada');
    }

    membresias.splice(index, 1);
    res.send('Membresía eliminada');
  }
}

module.exports = new MembresiasController();
