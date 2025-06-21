import { test, expect } from '@playwright/test'

test.describe('InfoPage', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/api/dogs?name=*', async route => {
      const url = new URL(route.request().url())
      const name = url.searchParams.get('name')

      if (name === 'bulldog') {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify([
            {
              id: 1,
              name: 'Bulldog',
              bred_for: 'Bull baiting',
              temperament: 'Docile, Willful, Friendly',
              life_span: '8 - 10 years',
              breed_group: 'Non-Sporting',
              reference_image_id: 'abc123',
              image: {
                id: 'img1',
                width: 500,
                height: 400,
                url: '',
              },
              height: {
                imperial: '12 - 16',
                metric: '30 - 40',
              },
              weight: {
                imperial: '50 - 55',
                metric: '23 - 25',
              },
            },
          ]),
        })
      } else if (name === 'error') {
        await route.fulfill({
          status: 500,
          contentType: 'application/json',
          body: JSON.stringify({ message: 'Internal Server Error' }),
        })
      } else {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify([]),
        })
      }
    })

    await page.goto('/info')
  })
  test('отображается заголовок и поле поиска', async ({ page }) => {
    await expect(page.getByTestId('info-page-title')).toBeVisible()

    await expect(page.getByTestId('info-page-search-input')).toBeVisible()
  })

  test('отображается текущий выбор породы после успешного поиска', async ({
    page,
  }) => {
    const searchInput = page.getByTestId('info-page-search-input')

    await searchInput.fill('bulldog')

    await page.waitForTimeout(1000)

    await expect(page.getByTestId('info-page-current-selection')).toHaveText(
      'Non-Sporting'
    )

    await expect(page.getByTestId('search-info-name')).toHaveText('Bulldog')
    await expect(page.getByTestId('search-info-bred-for')).toContainText(
      'Bull baiting'
    )
    await expect(page.getByTestId('search-info-temperament')).toContainText(
      'Docile, Willful, Friendly'
    )
    await expect(page.getByTestId('search-info-life-span')).toContainText(
      '8 - 10 years'
    )

    await expect(page.getByTestId('search-info-image')).toBeVisible()
  })

  test('отображается сообщение "нет результатов", если порода не найдена', async ({
    page,
  }) => {
    await page.getByTestId('info-page-search-input').fill('unknownbreed')

    await page.waitForTimeout(1000)

    await expect(page.getByTestId('search-info-no-results')).toBeVisible()
  })

  test('отображается уведомление об ошибке при сбое запроса', async ({
    page,
  }) => {
    await page.getByTestId('info-page-search-input').fill('error')

    await page.waitForTimeout(1000)

    const notification = page.getByTestId('info-page-notification')
    await expect(notification).toBeVisible()
  })

  test('показывается начальное сообщение до поиска', async ({ page }) => {
    await expect(page.getByTestId('search-info-initial-message')).toBeVisible()
  })
})
