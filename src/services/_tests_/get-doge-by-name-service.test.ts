import { getDogByNameService } from '../get-doge-by-name-service'

describe('getDogByNameService', () => {
  const mockDog = {
    id: 1,
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: 3,
  }

  beforeEach(() => {
    global.fetch = jest.fn()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('возвращает первого пса из массива при успешном ответе', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => [mockDog],
    })

    const result = await getDogByNameService('Buddy')
    expect(global.fetch).toHaveBeenCalledWith('/api/dogs?name=Buddy')
    expect(result).toEqual(mockDog)
  })

  it('возвращает null, если массив пустой', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => [],
    })

    const result = await getDogByNameService('Unknown')
    expect(result).toBeNull()
  })

  it('выбрасывает ошибку при неуспешном ответе', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 404,
    })

    await expect(getDogByNameService('Buddy')).rejects.toThrow(
      'Failed to fetch dog data: 404'
    )
  })
})
