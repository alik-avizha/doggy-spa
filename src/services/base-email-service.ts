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
      throw new Error(`HTTP error! status: ${response.status}`)
    }
  } catch (error) {
    console.error('Network or server error:', error)
    throw error
  }
}
