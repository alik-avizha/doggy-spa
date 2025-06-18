import type { SearchResponse } from '@elastic/elasticsearch/api/types'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { esClient } from '../../../lib/elasticsearch'

import type { Dog } from '@/types'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')

  if (!name) {
    return NextResponse.json(
      { error: 'Missing name query parameter' },
      { status: 400 }
    )
  }

  try {
    const result = await esClient.search<SearchResponse<Dog>>({
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
    const dogs = result.body.hits.hits.map(hit => hit._source as Dog)

    return NextResponse.json(dogs)
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Unknown error occurred'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
