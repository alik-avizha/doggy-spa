import { test, expect } from '@playwright/test'

test.describe('BookAppointmentPage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/book-appointment')
  })

  test('отображается заголовок страницы и основные поля', async ({ page }) => {
    await expect(page.getByTestId('book-appointment-page-title')).toBeVisible()
    await expect(
      page.getByTestId('book-appointment-firstName-field')
    ).toBeVisible()
    await expect(
      page.getByTestId('book-appointment-lastName-field')
    ).toBeVisible()
    await expect(page.getByTestId('book-appointment-email-field')).toBeVisible()
    await expect(
      page.getByTestId('book-appointment-phoneNumber-field')
    ).toBeVisible()
    await expect(
      page.getByTestId('book-appointment-message-field')
    ).toBeVisible()
    await expect(
      page.getByTestId('book-appointment-creditNumber-field')
    ).toBeVisible()
    await expect(
      page.getByTestId('book-appointment-expiryDate-field')
    ).toBeVisible()
    await expect(page.getByTestId('book-appointment-cvv-field')).toBeVisible()
    await expect(
      page.getByTestId('book-appointment-nameOnCard-field')
    ).toBeVisible()
    await expect(page.getByTestId('book-appointment-book-button')).toBeVisible()
  })

  test('можно заполнить форму и отправить, открывается модальное окно', async ({
    page,
  }) => {
    await page.getByTestId('book-appointment-firstName-field').fill('John')
    await page.getByTestId('book-appointment-lastName-field').fill('Doe')
    await page
      .getByTestId('book-appointment-email-field')
      .fill('john.doe@example.com')
    await page
      .getByTestId('book-appointment-phoneNumber-field')
      .fill('+1234567890')

    await page.locator('.react-datepicker__day--today').first().click()

    const input = page.getByTestId(
      'book-appointment-chooseATimeslontOn-field-11-12'
    )
    const id = await input.getAttribute('id')

    await page.locator(`label[for="${id}"]`).click()

    await page
      .getByTestId('book-appointment-message-field')
      .fill('Test message')

    await page
      .getByTestId('book-appointment-creditNumber-field')
      .fill('4111111111111111')
    await page.getByTestId('book-appointment-expiryDate-field').fill('12/25')
    await page.getByTestId('book-appointment-cvv-field').fill('123')
    await page.getByTestId('book-appointment-nameOnCard-field').fill('John Doe')

    await page.getByTestId('book-appointment-book-button').click()

    await expect(page.getByTestId('booking-info-container')).toBeVisible()
  })

  test('можно закрыть модальное окно', async ({ page }) => {
    await page.getByTestId('book-appointment-firstName-field').fill('John')
    await page.getByTestId('book-appointment-lastName-field').fill('Doe')
    await page
      .getByTestId('book-appointment-email-field')
      .fill('john.doe@example.com')
    await page
      .getByTestId('book-appointment-phoneNumber-field')
      .fill('+1234567890')
    await page.locator('.react-datepicker__day--today').first().click()

    const input = page.getByTestId(
      'book-appointment-chooseATimeslontOn-field-11-12'
    )
    const id = await input.getAttribute('id')

    await page.locator(`label[for="${id}"]`).click()
    await page
      .getByTestId('book-appointment-message-field')
      .fill('Test message')
    await page
      .getByTestId('book-appointment-creditNumber-field')
      .fill('4111111111111111')
    await page.getByTestId('book-appointment-expiryDate-field').fill('12/25')
    await page.getByTestId('book-appointment-cvv-field').fill('123')
    await page.getByTestId('book-appointment-nameOnCard-field').fill('John Doe')
    await page.getByTestId('book-appointment-book-button').click()

    const modal = page.getByTestId('book-appointment-modal')
    await expect(modal).toBeVisible()

    const closeButton = page.getByTestId('book-appointment-modal-close-button')
    await closeButton.click()

    await expect(modal).toBeHidden()
  })
})
