import { test, expect } from '@playwright/test';

test.describe('Theme Toggle', () => {
  test('should toggle theme', async ({ page }) => {
    await page.goto('/');

    // Check initial theme (should be system default or light)
    const initialClass = await page.locator('html').getAttribute('class');
    expect(initialClass).toBeTruthy();

    // Click theme toggle
    await page.click('button[aria-label="Toggle theme"]');

    // Wait for theme change
    await page.waitForTimeout(100);

    // Check if theme class changed
    const newClass = await page.locator('html').getAttribute('class');
    expect(newClass).not.toBe(initialClass);
  });
});
