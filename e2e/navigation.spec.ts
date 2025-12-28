import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to all pages', async ({ page }) => {
    await page.goto('/');

    // Check home page
    await expect(page).toHaveURL(/\/ja$/);

    // Navigate to About
    await page.click('text=自己紹介');
    await expect(page).toHaveURL(/\/ja\/about$/);

    // Navigate to Skills
    await page.click('text=スキル');
    await expect(page).toHaveURL(/\/ja\/skills$/);

    // Navigate to Timeline
    await page.click('text=経歴');
    await expect(page).toHaveURL(/\/ja\/timeline$/);

    // Navigate to Blog
    await page.click('text=ブログ');
    await expect(page).toHaveURL(/\/ja\/blog$/);

    // Navigate to Gallery
    await page.click('text=ギャラリー');
    await expect(page).toHaveURL(/\/ja\/gallery$/);
  });

  test('should toggle language', async ({ page }) => {
    await page.goto('/');

    // Click language toggle
    await page.click('button[aria-label="Toggle language"]');

    // Should switch to English
    await expect(page).toHaveURL(/\/en$/);
    await expect(page.locator('text=Home')).toBeVisible();

    // Toggle back to Japanese
    await page.click('button[aria-label="Toggle language"]');
    await expect(page).toHaveURL(/\/ja$/);
    await expect(page.locator('text=ホーム')).toBeVisible();
  });
});
