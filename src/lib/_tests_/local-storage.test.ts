import {
  getFromLocalStorage,
  getObjectFromLocalStorage,
  setInLocalStorage,
  removeFromLocalStorage,
} from '../local-storage'

describe('localStorage utils', () => {
  beforeEach(() => {
    localStorage.clear()
    jest.clearAllMocks()
  })

  describe('getFromLocalStorage', () => {
    it('должен вернуть значение из localStorage по ключу', () => {
      localStorage.setItem('key1', 'value1')
      expect(getFromLocalStorage('key1')).toBe('value1')
    })

    it('должен вернуть null, если ключа нет', () => {
      expect(getFromLocalStorage('nonexistent')).toBeNull()
    })
  })

  describe('getObjectFromLocalStorage', () => {
    it('должен вернуть объект, если в localStorage есть валидный JSON', () => {
      const obj = { a: 1, b: 'test' }
      localStorage.setItem('objKey', JSON.stringify(obj))
      const result = getObjectFromLocalStorage<typeof obj>('objKey')
      expect(result).toEqual(obj)
    })

    it('должен вернуть null, если в localStorage нет значения по ключу', () => {
      const result = getObjectFromLocalStorage('missingKey')
      expect(result).toBeNull()
    })

    it('должен выбросить ошибку, если JSON некорректный', () => {
      localStorage.setItem('badJson', 'not-json')
      expect(() => getObjectFromLocalStorage('badJson')).toThrow()
    })
  })

  describe('setInLocalStorage', () => {
    it('должен записать строку в localStorage', () => {
      setInLocalStorage('key2', 'value2')
      expect(localStorage.getItem('key2')).toBe('value2')
    })
  })

  describe('removeFromLocalStorage', () => {
    it('должен удалить указанные ключи из localStorage', () => {
      localStorage.setItem('keyA', 'valueA')
      localStorage.setItem('keyB', 'valueB')
      removeFromLocalStorage('keyA', 'keyB')
      expect(localStorage.getItem('keyA')).toBeNull()
      expect(localStorage.getItem('keyB')).toBeNull()
    })

    it('не должен удалять ключи, не переданные в аргументах', () => {
      localStorage.setItem('keyC', 'valueC')
      removeFromLocalStorage('keyD')
      expect(localStorage.getItem('keyC')).toBe('valueC')
    })
  })
})
