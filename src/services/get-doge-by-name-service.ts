import type { Dog } from '@/types'

export async function getDogByNameService(name: string): Promise<Dog | null> {
  const res = await fetch(`/api/dogs?name=${name}`)
  if (!res.ok) {
    throw new Error(`Failed to fetch dog data: ${res.status}`)
  }
  const result = await res.json()
  if (Array.isArray(result) && result.length > 0) {
    return result[0]
  }
  return null
}
