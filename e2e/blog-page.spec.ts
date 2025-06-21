import { test, expect } from '@playwright/test'

test.describe('BlogPage', () => {
  test('отображается заголовок', async ({ page }) => {
    await page.goto('/blog')
    const element = page.getByTestId('blog-page-title')

    await expect(element).toBeVisible()
    await expect(element).toHaveText('The Bark Chronicles')
  })
})
