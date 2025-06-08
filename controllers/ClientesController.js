const { clientes } = require('../models/data');

class ClientesController {
  // GET /clientes
  listar(req, res) {
    res.render('clientes/listar', { clientes });
  }

  // GET /clientes/:id
  obtenerUno(req, res) {
    const id = parseInt(req.params.id);
    const cliente = clientes.find(c => c.id === id);

    if (!cliente) {
      return res.status(404).send('Cliente no encontrado');
    }

    res.render('clientes/detalle', { cliente });
  }

  // POST /clientes
  agregar(req, res) {
    const nuevoCliente = {
      id: clientes.length + 1,
      nombre: req.body.nombre,
      email: req.body.email,
      telefono: req.body.telefono
    };

    clientes.push(nuevoCliente);
    res.status(201).json({ mensaje: 'Cliente creado exitosamente' });
  }

  // PUT /clientes/:id
  actualizar(req, res) {
    const id = parseInt(req.params.id);
    const cliente = clientes.find(c => c.id === id);

    if (!cliente) {
      return res.status(404).send('Cliente no encontrado');
    }

    cliente.nombre = req.body.nombre;
    cliente.email = req.body.email;
    cliente.telefono = req.body.telefono;

    res.send('Cliente actualizado');
  }

  // DELETE /clientes/:id
  eliminar(req, res) {
    const id = parseInt(req.params.id);
    const index = clientes.findIndex(c => c.id === id);

    if (index === -1) {
      return res.status(404).send('Cliente no encontrado');
    }

    clientes.splice(index, 1);
    res.send('Cliente eliminado');
  }
}

module.exports = new ClientesController();
