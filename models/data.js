const clientes = [
  {
    id: 1,
    nombre: 'Carlos Pérez',
    email: 'carlos.perez@email.com',
    telefono: '04140000001',
  },
  {
    id: 2,
    nombre: 'Ana Torres',
    email: 'ana.torres@email.com',
    telefono: '04140000002',
  }
];

const membresias = [
  {
    id: 1,
    clienteId: 1,
    tipo: 'Mensual',
    fechaInicio: '2025-06-01',
    fechaVencimiento: '2025-07-01',
  },
  {
    id: 2,
    clienteId: 2,
    tipo: 'Trimestral',
    fechaInicio: '2025-05-01',
    fechaVencimiento: '2025-08-01',
  }
];

const pagos = [
  {
    id: 1,
    clienteId: 1,
    fechaPago: '2025-06-01',
    monto: 25.00,
  },
  {
    id: 2,
    clienteId: 2,
    fechaPago: '2025-05-01',
    monto: 65.00,
  }
];

module.exports = {
  clientes,
  membresias,
  pagos
};
