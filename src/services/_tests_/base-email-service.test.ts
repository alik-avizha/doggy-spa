import { baseEmailService } from '../base-email-service'

describe('baseEmailService', () => {
  const url = 'https://example.com/api'
  const data = { email: 'test@example.com' }

  beforeEach(() => {
    global.fetch = jest.fn()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('должен отправлять POST запрос с правильными параметрами', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
    })

    await expect(baseEmailService(url, data)).resolves.toBeUndefined()

    expect(global.fetch).toHaveBeenCalledWith(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
  })

  it('должен выбрасывать ошибку при неуспешном ответе', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 500,
    })

    await expect(baseEmailService(url, data)).rejects.toThrow(
      'HTTP error! status: 500'
    )
  })

  it('должен выбрасывать ошибку при сетевой ошибке', async () => {
    const error = new Error('Network failure')
    ;(global.fetch as jest.Mock).mockRejectedValue(error)

    await expect(baseEmailService(url, data)).rejects.toThrow(error)
  })
})
