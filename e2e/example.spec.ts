import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  // Переходим на страницу
  await page.goto('http://localhost:3000/')

  // Находим элемент по id
  const element = page.locator('data-test-id=page-title')

  // Проверяем, что элемент видим
  await expect(element).toBeVisible()

  // Пример проверки текста внутри элемента
  await expect(element).toHaveText('Book your doggy spa day!')
})
