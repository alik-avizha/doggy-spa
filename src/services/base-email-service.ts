type ValidationSchemaType = Record<string, any>
export async function baseEmailService<T extends ValidationSchemaType>(
  url: string,
  data: T
): Promise<void> {
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
