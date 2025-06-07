import { NextResponse } from 'next/server'

import { esClient } from '../../../lib/elasticsearch'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')

  if (!name) {
    return NextResponse.json(
      { error: 'Missing name query parameter' },
      { status: 400 }
    )
  }

  try {
    const result = await esClient.search({
      index: 'dogs',
      body: {
        query: {
          match: {
            name: {
              query: name,
              fuzziness: 'AUTO',
            },
          },
        },
      },
    })

    // eslint-disable-next-line no-underscore-dangle
    const dogs = result.body.hits.hits.map(hit => hit._source)
    return NextResponse.json(dogs)
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
