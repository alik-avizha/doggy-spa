import { test, expect } from '@playwright/test'

import { SPA_SERVICES } from '@/constants'

test.describe('SpaServicesPage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/spa-services')
  })

  test('отображается заголовок страницы', async ({ page }) => {
    const title = page.getByTestId('spa-services-page-title')
    await expect(title).toBeVisible()
  })

  test('отображаются все услуги с заголовком, ценой и описанием', async ({
    page,
  }) => {
    /* eslint-disable no-plusplus, no-await-in-loop */
    for (let i = 0; i < SPA_SERVICES.length; i++) {
      const service = SPA_SERVICES[i]

      const title = page.getByTestId(`spa-service-title-${i}`)
      await expect(title).toBeVisible()

      const price = page.getByTestId(`spa-service-price-${i}`)
      await expect(price).toBeVisible()
      await expect(price).toHaveText(service.price)

      const description = page.getByTestId(`spa-service-description-${i}`)
      await expect(description).toBeVisible()
    }
  })
})
