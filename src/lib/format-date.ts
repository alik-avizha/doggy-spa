export const formatDateRu = (isoString: string): string => {
  const date = new Date(isoString)
  return date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}
export const formatDateEn = (isoString: string): string => {
  const date = new Date(isoString)

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}
