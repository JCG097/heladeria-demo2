const { pedirHelado, SABORES_DISPONIBLES } = require('../../app/src/sabores');

describe('pedirHelado', () => {
  test('el sabor fresa está disponible para su compra', () => {
    expect(SABORES_DISPONIBLES).toContain('fresa');
  });

  test('pedir un helado de fresa devuelve el sabor disponible', () => {
    expect(pedirHelado('fresa')).toEqual({ sabor: 'fresa', disponible: true });
  });

  test('pedir un sabor que no existe lanza un error de negocio', () => {
    expect(() => pedirHelado('chocolate')).toThrow('El sabor "chocolate" no está disponible.');
  });

  test('pedir un helado sin indicar sabor lanza un error de negocio', () => {
    expect(() => pedirHelado()).toThrow('Debes indicar un sabor.');
  });
});
