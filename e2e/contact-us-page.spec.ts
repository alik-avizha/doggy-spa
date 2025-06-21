import { test, expect } from '@playwright/test'

test.describe('ContactUsPage', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/contact', route => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true }),
      })
    })

    await page.goto('/contact-us')
  })

  test('отображаются заголовок, описание и все поля формы', async ({
    page,
  }) => {
    await expect(page.getByTestId('contact-us-page-title')).toBeVisible()
    await expect(page.getByTestId('contact-us-description')).toBeVisible()

    await expect(page.getByTestId('contact-us-firstName-field')).toBeVisible()
    await expect(page.getByTestId('contact-us-lastName-field')).toBeVisible()
    await expect(page.getByTestId('contact-us-email-field')).toBeVisible()
    await expect(page.getByTestId('contact-us-phoneNumber-field')).toBeVisible()
    await expect(page.getByTestId('contact-us-message-field')).toBeVisible()

    await expect(page.getByTestId('contact-us-submit-button')).toBeVisible()
  })

  test('можно заполнить форму и отправить с успешным ответом', async ({
    page,
  }) => {
    await page.getByTestId('contact-us-firstName-field').fill('John')
    await page.getByTestId('contact-us-lastName-field').fill('Doe')
    await page
      .getByTestId('contact-us-email-field')
      .fill('john.doe@example.com')
    await page.getByTestId('contact-us-phoneNumber-field').fill('+1234567890')
    await page
      .getByTestId('contact-us-message-field')
      .fill('Hello, this is a test message.')

    await page.getByTestId('contact-us-submit-button').click()

    const notification = page.getByTestId('contact-us-notification')
    await expect(notification).toBeVisible()
    await expect(notification).toContainText(/thank you/i)
  })

  test('отображается уведомление об ошибке при сбое сервиса', async ({
    page,
  }) => {
    await page.route('**/contact', route => {
      route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Internal Server Error' }),
      })
    })

    await page.reload()

    await page.getByTestId('contact-us-firstName-field').fill('John')
    await page.getByTestId('contact-us-lastName-field').fill('Doe')
    await page
      .getByTestId('contact-us-email-field')
      .fill('john.doe@example.com')
    await page.getByTestId('contact-us-phoneNumber-field').fill('+1234567890')
    await page
      .getByTestId('contact-us-message-field')
      .fill('Hello, this is a test message.')

    await page.getByTestId('contact-us-submit-button').click()

    const notification = page.getByTestId('contact-us-notification')
    await expect(notification).toBeVisible()
    await expect(notification).toContainText(/sorry/i)
  })
})
