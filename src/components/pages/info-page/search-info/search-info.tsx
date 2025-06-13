import type { FC } from 'react'

import { Gap } from '@/components/gap'
import { Typography } from '@/components/typography'
import type { Dog } from '@/types'

import { PhotoBlock, ImageStyled, DescriptionWrapper } from './styled'

type Props = {
  data: Dog | null
  hasSearched: boolean
}

export const SearchInfo: FC<Props> = ({ data, hasSearched }) => {
  if (data) {
    return (
      <>
        <PhotoBlock>
          <ImageStyled
            src={data.image?.url}
            alt={data.name}
            width={200}
            height={200}
          />
          <Gap size={30} />
          <Typography size={64} color="#000000">
            {data.name}
          </Typography>
        </PhotoBlock>
        <Gap size={100} />
        <DescriptionWrapper>
          <Typography size={40}>Bred for: {data.bred_for}</Typography>
          <Typography size={40}>Temperament: {data.temperament}</Typography>
          <Typography size={40}>Life span: {data.life_span}</Typography>
        </DescriptionWrapper>
      </>
    )
  }

  if (hasSearched) {
    return (
      <Typography size={40} textAlign="center">
        No results found
      </Typography>
    )
  }

  return (
    <Typography size={40} textAlign="center">
      Try to find dog
    </Typography>
  )
}
