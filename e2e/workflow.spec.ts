import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/FTP-Games/);
});

test('get started', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Click the get started link.
  await page.getByRole('button', { name: 'Log In' }).first().click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*login/);
});

test('Successful registration and open private page', async ({ page }) => {
  const randomNum = Math.round(Math.random() * 1000 + Math.random() * 100);
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await page.getByPlaceholder('username').fill(`test${randomNum}`);
  await page.getByPlaceholder('password', { exact: true }).fill('12345678');
  await page.getByPlaceholder('passwordConfirm').fill('12345678');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('button', { name: `test${randomNum}` }).click();
  await page.locator('.dropdown-item', { hasText: 'Inventory' }).click();
  await expect(page).toHaveURL(/.*private/);
});