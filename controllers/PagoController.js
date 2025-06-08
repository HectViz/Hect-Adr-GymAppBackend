const { pagos } = require('../models/data');

class PagoController {
  constructor() {
    this.pagos = pagos;
    this.nextId = this.pagos.length > 0
      ? Math.max(...this.pagos.map(p => p.id)) + 1
      : 1;
  }

  // GET /pagos
  listar = (req, res) => {
    res.render('pagos/listar', { pagos: this.pagos });
  };

  // POST /pagos
  agregar = (req, res) => {
    const { clienteId, monto, fechaPago } = req.body;
    const nuevoPago = {
      id: this.nextId++,
      clienteId: Number(clienteId),
      monto: Number(monto),
      fechaPago
    };
    this.pagos.push(nuevoPago);
    res.status(201).json({ mensaje: 'Pago registrado correctamente' });
  };
}

module.exports = new PagoController();
