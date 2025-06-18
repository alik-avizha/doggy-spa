import { NextResponse } from 'next/server'
import fetch from 'node-fetch'

import { esClient } from '../../../lib/elasticsearch'

import type { Dog } from '@/types'

export async function GET() {
  try {
    try {
      await esClient.indices.delete({ index: 'dogs' })
    } catch (error: unknown) {
      console.error(
        'Index "dogs" does not exist or could not be deleted',
        error
      )
    }

    try {
      await esClient.indices.create({ index: 'dogs' })
    } catch (error: unknown) {
      console.error(
        'Index "dogs" already exists or could not be created',
        error
      )
    }

    const response = await fetch(`https://api.thedogapi.com/v1/breeds`, {
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY ?? '',
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) throw new Error(`API error: ${response.status}`)

    const dogs = (await response.json()) as Dog[]

    const body = dogs.flatMap(dog => [
      { index: { _index: 'dogs', _id: dog.id } },
      dog,
    ])

    await esClient.bulk({ refresh: true, body })

    return NextResponse.json({
      message: 'Данные успешно обновлены',
      count: dogs.length,
    })
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Unknown error occurred'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
