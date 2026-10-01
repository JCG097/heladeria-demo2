// Pruebas E2E del issue #1: catálogo de sabores de la heladería.
// Derivadas únicamente de los criterios de aceptación de la historia, no del código existente.
const { test, expect } = require('@playwright/test');

test.describe('Issue #1: Catálogo de sabores de la heladería', () => {
  // Criterio: "La página principal muestra el título "Heladería" [...]."
  test('la página principal muestra el título "Heladería"', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByTestId('titulo-app')).toHaveText('Heladería');
  });

  // Criterio: "[...] y una tarjeta por cada sabor con su nombre y su precio en
  // pesos colombianos." Interpretación literal: cada sabor tiene su propia tarjeta
  // identificable, que muestra el nombre y el precio (con el símbolo $, propio del
  // formato de pesos colombianos).
  test('muestra una tarjeta por cada sabor con su nombre y su precio en pesos colombianos', async ({ page }) => {
    await page.goto('/');

    const vainilla = page.getByTestId('sabor-vainilla');
    await expect(vainilla).toBeVisible();
    await expect(vainilla).toContainText('Vainilla');
    await expect(vainilla).toContainText(/\$\s?4[.,]?000/);

    const chocolate = page.getByTestId('sabor-chocolate');
    await expect(chocolate).toBeVisible();
    await expect(chocolate).toContainText('Chocolate');
    await expect(chocolate).toContainText(/\$\s?4[.,]?500/);

    const maracuya = page.getByTestId('sabor-maracuya');
    await expect(maracuya).toBeVisible();
    await expect(maracuya).toContainText('Maracuyá');
    await expect(maracuya).toContainText(/\$\s?5[.,]?000/);
  });
});
