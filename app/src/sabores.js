// Catálogo de sabores de la heladería: funciones puras de consulta.
const { ErrorNegocio } = require('./errores');

const SABORES = [
  { nombre: 'Vainilla', precio: 4000 },
  { nombre: 'Chocolate', precio: 4500 },
  { nombre: 'Maracuyá', precio: 5000 },
];

function listarSabores() {
  return SABORES;
}

function buscarSabor(nombre) {
  const sabor = SABORES.find((s) => s.nombre.toLowerCase() === nombre.toLowerCase());
  if (!sabor) {
    throw new ErrorNegocio(`El sabor ${nombre} no está disponible.`, 404);
  }
  return sabor;
}

module.exports = { listarSabores, buscarSabor };
