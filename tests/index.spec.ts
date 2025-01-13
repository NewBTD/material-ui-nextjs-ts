import { test, expect } from '@playwright/test';

test('should display Material UI text in first h1', async ({ page }) => {
  await page.goto('http://localhost:3001');
  const heading = await page.locator('h1').first();
  await expect(heading).toContainText('Material UI');
});
