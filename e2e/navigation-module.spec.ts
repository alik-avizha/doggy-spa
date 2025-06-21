import { test, expect } from '@playwright/test'

import {
  NAVIGATION_LINKS,
  NETWORK_LINKS,
  ROUTES_WITH_LABEL,
} from '@/constants/routes'

test.describe('Header navigation', () => {
  test('отображаются все навигационные ссылки', async ({ page }) => {
    /* eslint-disable no-restricted-syntax, no-await-in-loop */
    await page.goto('/')
    for (const { href } of ROUTES_WITH_LABEL) {
      const link = page.getByTestId(href)
      await expect(link).toBeVisible()
      await expect(link).toHaveAttribute('href', href)
    }
  })

  test('отображается информационная панель с текстом', async ({ page }) => {
    await page.goto('/')
    const infoPlate = page.getByTestId('header-info-plate')
    await expect(infoPlate).toBeVisible()
  })
})

test.describe('Footer navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('отображаются навигационные ссылки в футере', async ({ page }) => {
    for (const link of [
      ...NAVIGATION_LINKS.left,
      ...NAVIGATION_LINKS.right,
      ...NAVIGATION_LINKS.cookies,
      ...NAVIGATION_LINKS.privacy,
    ]) {
      const el = page.getByTestId(`footer-link-${link.labelKey}`)
      await expect(el).toBeVisible()
    }
  })

  test('отображаются иконки соцсетей с корректными ссылками', async ({
    page,
  }) => {
    for (const { href } of NETWORK_LINKS) {
      const iconLink = page.locator(`a[href="${href}"]`)
      await expect(iconLink).toBeVisible()
    }
  })

  test('форма подписки принимает email и показывает уведомление об успехе', async ({
    page,
  }) => {
    const emailInput = page.getByTestId('footer-email-field')
    const submitButton = page.getByTestId('footer-submit-button')

    await emailInput.fill('test@example.com')

    await page.route('**/subscribeToLetter', route => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true }),
      })
    })

    await submitButton.click()

    const notification = page.getByTestId('footer-notification')
    await expect(notification).toBeVisible()
  })

  test('форма подписки показывает ошибку при сбое сервиса', async ({
    page,
  }) => {
    const emailInput = page.getByTestId('footer-email-field')
    const submitButton = page.getByTestId('footer-submit-button')

    await emailInput.fill('test@example.com')

    await page.route('**/subscribeToLetter', route => {
      route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Internal Server Error' }),
      })
    })

    await submitButton.click()

    const notification = page.getByTestId('footer-notification')
    await expect(notification).toBeVisible()
  })

  test('отображается переключатель языка и переключает язык', async ({
    page,
  }) => {
    const switcher = page.getByRole('group', { name: 'Language switcher' })
    await expect(switcher).toBeVisible()

    const enButton = switcher.getByRole('button', { name: 'EN' })
    const ruButton = switcher.getByRole('button', { name: 'RU' })

    await expect(enButton).toBeVisible()
    await expect(ruButton).toBeVisible()

    const enPressed = await enButton.getAttribute('aria-pressed')
    const ruPressed = await ruButton.getAttribute('aria-pressed')

    expect(enPressed === 'true' || ruPressed === 'true').toBeTruthy()

    if (ruPressed !== 'true') {
      await ruButton.click()
      await expect(ruButton).toHaveAttribute('aria-pressed', 'true')
      await expect(enButton).toHaveAttribute('aria-pressed', 'false')
    }

    if (enPressed !== 'true') {
      await enButton.click()
      await expect(enButton).toHaveAttribute('aria-pressed', 'true')
      await expect(ruButton).toHaveAttribute('aria-pressed', 'false')
    }
  })
})
