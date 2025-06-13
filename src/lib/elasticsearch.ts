import { Client } from '@elastic/elasticsearch'

const node =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : process.env.NEXT_PUBLIC_ELASTICSEARCH_URL

export const esClient = new Client({ node })
