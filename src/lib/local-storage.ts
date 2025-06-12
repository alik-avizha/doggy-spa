export const getFromLocalStorage = (key: string) => localStorage.getItem(key)
export const getObjectFromLocalStorage = <T>(key: string) => {
  const rawObject = getFromLocalStorage(key)

  return rawObject ? (JSON.parse(rawObject) as T) : null
}
export const setInLocalStorage = (key: string, value: string) =>
  localStorage.setItem(key, value)

export const removeFromLocalStorage = (...keys: string[]) =>
  keys.forEach(key => localStorage.removeItem(key))
