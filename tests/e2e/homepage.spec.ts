import { test, expect } from '@playwright/test';

test('homepage shows hero title', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toHaveText(/Adamstown Cricket Club/);
});