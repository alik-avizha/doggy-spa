import { test, expect } from '@playwright/test'

test.describe('AboutUsPage', () => {
  test('отображается заголовок', async ({ page }) => {
    await page.goto('/about-us')
    const element = page.getByTestId('about-us-page-title')

    await expect(element).toBeVisible()
    await expect(element).toHaveText('About Us')
  })
})
