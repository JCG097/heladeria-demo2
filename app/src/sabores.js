// Lógica de negocio de los sabores de helado disponibles para pedir.
const { ErrorNegocio } = require('./errores');

const SABORES_DISPONIBLES = ['fresa'];

function pedirHelado(sabor) {
  if (!sabor) {
    throw new ErrorNegocio('Debes indicar un sabor.');
  }
  if (!SABORES_DISPONIBLES.includes(sabor)) {
    throw new ErrorNegocio(`El sabor "${sabor}" no está disponible.`);
  }
  return { sabor, disponible: true };
}

module.exports = { SABORES_DISPONIBLES, pedirHelado };
