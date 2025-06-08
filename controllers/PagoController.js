class PagoController {
  constructor() {
    this.pagos = [
      { id: 1, clienteId: 1, monto: 20, fechaPago: '2025-06-01' },
      { id: 2, clienteId: 2, monto: 50, fechaPago: '2025-06-03' }
    ];
    this.nextId = 3;
  }

  listar = (req, res) => {
    res.render('pagos/listar', { pagos: this.pagos });
  };

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
