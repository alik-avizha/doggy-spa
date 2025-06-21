import { test, expect } from '@playwright/test'

test.describe('HomePage', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/subscribeToLetter', route =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true }),
      })
    )
    await page.goto('/')
  })

  test('отображается заголовок и кнопка записи', async ({ page }) => {
    const element = page.getByTestId('home-page-title')

    await expect(element).toBeVisible()
    await expect(element).toHaveText('Book your doggy spa day!')

    await expect(page.getByTestId('book-appointment-button')).toBeVisible()
  })

  test('работает кнопка записи', async ({ page }) => {
    await page.getByTestId('book-appointment-button').click()
    await expect(page).toHaveURL(/book-appointment/)
  })

  test('отображается карточка AnimalInfoList', async ({ page }) => {
    const element = page.getByTestId('dog-animal-card-1')

    await expect(element).toBeVisible()
    await expect(page.getByTestId('dog-see-more-button')).toBeVisible()
  })

  test('работает форма подписки', async ({ page }) => {
    await page.getByTestId('sign-up-email-input').fill('test@example.com')

    await page.getByTestId('sign-up-submit-button').click()

    await expect(
      page.getByText(/успешно подписаны|successfully subscribed/i)
    ).toBeVisible({ timeout: 5000 })
  })
})
