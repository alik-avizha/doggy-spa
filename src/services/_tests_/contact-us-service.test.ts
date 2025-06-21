import * as baseEmailModule from '../base-email-service'
import { contactUsService } from '../contact-us-service'

describe('contactUsService', () => {
  const mockData = {
    firstName: 'John',
    lastName: 'Doe',
    phoneNumber: '+1234567890',
    email: 'john@example.com',
    message: 'Hello',
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('вызывает baseEmailService с правильным URL и данными', async () => {
    const baseEmailServiceMock = jest
      .spyOn(baseEmailModule, 'baseEmailService')
      .mockResolvedValueOnce(undefined)

    await expect(contactUsService(mockData)).resolves.toBeUndefined()

    expect(baseEmailServiceMock).toHaveBeenCalledWith(
      'https://node-js-gmail.vercel.app/contact',
      mockData
    )
  })

  it('пробрасывает ошибку, если baseEmailService выбрасывает ошибку', async () => {
    const error = new Error('Network error')
    jest.spyOn(baseEmailModule, 'baseEmailService').mockRejectedValueOnce(error)

    await expect(contactUsService(mockData)).rejects.toThrow('Network error')
  })
})
