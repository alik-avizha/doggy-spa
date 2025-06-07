import { NextResponse } from 'next/server'
import fetch from 'node-fetch'

import { esClient } from '../../../lib/elasticsearch'

export async function GET() {
  try {
    try {
      await esClient.indices.delete({ index: 'dogs' })
      console.log('Index "dogs" deleted')
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.log('Index "dogs" does not exist or could not be deleted')
    }

    try {
      await esClient.indices.create({ index: 'dogs' })
      console.log('Index "dogs" created')
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.log('Index "dogs" already exists or could not be created')
    }

    const response = await fetch(`https://api.thedogapi.com/v1/breeds`, {
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) throw new Error(`API error: ${response.status}`)

    const dogs = await response.json()

    const body = dogs.flatMap(dog => [
      { index: { _index: 'dogs', _id: dog.id } },
      dog,
    ])

    console.log('body', body)

    await esClient.bulk({ refresh: true, body })

    return NextResponse.json({
      message: 'Данные успешно обновлены',
      count: dogs.length,
    })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
