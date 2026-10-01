// Pruebas de aceptación del issue #1: catálogo de sabores de la heladería.
// Derivadas únicamente de los criterios de aceptación de la historia, no del código existente.
const request = require('supertest');
const { crearApp } = require('../../app/src/app');

describe('Issue #1: Catálogo de sabores de la heladería', () => {
  let app;

  beforeEach(() => {
    app = crearApp();
  });

  // Criterio: "Cuando consulto GET /api/sabores, entonces responde 200 con una lista
  // de 3 sabores: Vainilla a $4,000, Chocolate a $4,500 y Maracuyá a $5,000."
  test('GET /api/sabores responde 200 con la lista de 3 sabores y sus precios', async () => {
    const res = await request(app).get('/api/sabores');

    expect(res.status).toBe(200);
    expect(res.body).toEqual([
      { nombre: 'Vainilla', precio: 4000 },
      { nombre: 'Chocolate', precio: 4500 },
      { nombre: 'Maracuyá', precio: 5000 },
    ]);
  });

  // Criterio: "Cuando consulto GET /api/sabores/chocolate, entonces responde 200
  // con el nombre "Chocolate" y el precio 4500."
  test('GET /api/sabores/chocolate responde 200 con el nombre Chocolate y el precio 4500', async () => {
    const res = await request(app).get('/api/sabores/chocolate');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ nombre: 'Chocolate', precio: 4500 });
  });

  // Criterio: "Cuando consulto un sabor que no existe, como GET /api/sabores/menta,
  // entonces responde 404 con el mensaje "El sabor menta no está disponible."."
  test('GET /api/sabores/menta responde 404 con el mensaje de sabor no disponible', async () => {
    const res = await request(app).get('/api/sabores/menta');

    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'El sabor menta no está disponible.' });
  });

  // El criterio sobre el título "Heladería" y las tarjetas de sabores en la página
  // principal se valida con la prueba E2E de tests/e2e/issue-1.spec.js, porque
  // depende de contenido renderizado en el navegador, no de la respuesta HTML estática.
});
