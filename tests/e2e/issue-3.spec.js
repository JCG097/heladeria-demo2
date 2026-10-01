// Pruebas E2E del Issue #3 (Heladeria v2).
//
// Criterio: "dado que voy a la heladeria cuando pida un helado de fresa
// entonces deberia estar disponible para su compra".
//
// Interpretación literal elegida: la interfaz ofrece un selector de sabor
// (data-testid="selector-sabor") con la opción "fresa" y un botón para
// pedir el helado (data-testid="boton-pedir"). Al pedir el helado de fresa,
// la interfaz muestra un resultado (data-testid="resultado-pedido") que
// confirma que el sabor está disponible para su compra.
const { test, expect } = require('@playwright/test');

test('dado que voy a la heladeria cuando pido un helado de fresa entonces deberia estar disponible para su compra', async ({ page }) => {
  await page.goto('/');

  await page.getByTestId('selector-sabor').selectOption('fresa');
  await page.getByTestId('boton-pedir').click();

  await expect(page.getByTestId('resultado-pedido')).toContainText('disponible');
});
