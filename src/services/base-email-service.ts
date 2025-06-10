type ValidationSchemaType = Record<string, any>
export async function baseEmailService<T extends ValidationSchemaType>(
  url: string,
  data: T,
  errors: Record<keyof T, string>
): Promise<void> {
  if (Object.keys(errors).length > 0) {
    return
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!response.ok) {
      console.error('Ошибка при отправке сообщения')
    }
  } catch (error) {
    console.error('Ошибка сети или сервера', error)
  }
}
