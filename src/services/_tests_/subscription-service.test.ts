import * as baseEmailModule from '../base-email-service'
import { subscribeToNewsletterService } from '../subscription-service'

describe('subscribeToNewsletterService', () => {
  const mockData = {
    email: 'test@example.com',
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('вызывает baseEmailService с правильным URL и данными', async () => {
    const baseEmailServiceMock = jest
      .spyOn(baseEmailModule, 'baseEmailService')
      .mockResolvedValueOnce(undefined)

    await expect(
      subscribeToNewsletterService(mockData)
    ).resolves.toBeUndefined()

    expect(baseEmailServiceMock).toHaveBeenCalledWith(
      'https://node-js-gmail.vercel.app/subscribeToLetter',
      mockData
    )
  })

  it('пробрасывает ошибку, если baseEmailService выбрасывает ошибку', async () => {
    const error = new Error('Network error')
    jest.spyOn(baseEmailModule, 'baseEmailService').mockRejectedValueOnce(error)

    await expect(subscribeToNewsletterService(mockData)).rejects.toThrow(
      'Network error'
    )
  })
})
