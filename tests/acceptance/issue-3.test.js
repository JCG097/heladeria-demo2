// Pruebas de aceptación del Issue #3 (Heladeria v2).
//
// Criterio: "dado que voy a la heladeria cuando pida un helado de fresa
// entonces deberia estar disponible para su compra".
//
// Interpretación literal elegida (el criterio no define el contrato de la
// API, solo se deduce de la historia): "pedir un helado" se modela como
// POST /pedidos con el sabor elegido en el cuerpo ({ sabor: 'fresa' }).
// "Deberia estar disponible para su compra" se modela como una respuesta
// exitosa (201) cuyo cuerpo confirma la disponibilidad del sabor pedido
// con `disponible: true`.
const request = require('supertest');
const { crearApp } = require('../../app/src/app');

describe('Issue #3 - Heladeria v2: pedir un helado de fresa', () => {
  let app;

  beforeEach(() => {
    app = crearApp();
  });

  test('cuando pido un helado de fresa entonces deberia estar disponible para su compra', async () => {
    const res = await request(app).post('/pedidos').send({ sabor: 'fresa' });

    expect(res.status).toBe(201);
    expect(res.body.sabor).toBe('fresa');
    expect(res.body.disponible).toBe(true);
  });
});
