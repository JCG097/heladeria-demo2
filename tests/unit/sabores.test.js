const { listarSabores, buscarSabor } = require('../../app/src/sabores');
const { ErrorNegocio } = require('../../app/src/errores');

describe('sabores', () => {
  test('listarSabores devuelve los 3 sabores con su precio', () => {
    expect(listarSabores()).toEqual([
      { nombre: 'Vainilla', precio: 4000 },
      { nombre: 'Chocolate', precio: 4500 },
      { nombre: 'Maracuyá', precio: 5000 },
    ]);
  });

  test('buscarSabor encuentra un sabor existente sin distinguir mayúsculas', () => {
    expect(buscarSabor('chocolate')).toEqual({ nombre: 'Chocolate', precio: 4500 });
  });

  test('buscarSabor lanza ErrorNegocio 404 si el sabor no existe', () => {
    expect(() => buscarSabor('menta')).toThrow(ErrorNegocio);
    try {
      buscarSabor('menta');
    } catch (err) {
      expect(err.status).toBe(404);
      expect(err.message).toBe('El sabor menta no está disponible.');
    }
  });
});
