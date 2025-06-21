import { formatDateRu, formatDateEn } from '../format-date'

describe('formatDateRu', () => {
  it('корректно форматирует дату в формате ru-RU', () => {
    const isoString = '2025-06-21T00:00:00.000Z'
    const formatted = formatDateRu(isoString)

    expect(formatted).toMatch(/\d{2}\.\d{2}\.\d{4}/)

    expect(formatted).toBe('21.06.2025')
  })

  it('возвращает корректный формат для другой даты', () => {
    const isoString = '1999-12-31T00:00:00.000Z'
    const formatted = formatDateRu(isoString)
    expect(formatted).toBe('31.12.1999')
  })
})

describe('formatDateEn', () => {
  it('корректно форматирует дату в формате en-US', () => {
    const isoString = '2025-06-21T00:00:00.000Z'
    const formatted = formatDateEn(isoString)

    expect(formatted).toBe('Jun 21, 2025')
  })

  it('возвращает корректный формат для другой даты', () => {
    const isoString = '1999-12-31T00:00:00.000Z'
    const formatted = formatDateEn(isoString)
    expect(formatted).toBe('Dec 31, 1999')
  })
})
