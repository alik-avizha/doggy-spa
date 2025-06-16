import type { FC } from 'react'

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
          <Typography size="xxxl" color="black">
            {data.name}
          </Typography>
        </PhotoBlock>
        <DescriptionWrapper>
          <Typography size="xxl">Bred for: {data.bred_for}</Typography>
          <Typography size="xxl">Temperament: {data.temperament}</Typography>
          <Typography size="xxl">Life span: {data.life_span}</Typography>
        </DescriptionWrapper>
      </>
    )
  }

  if (hasSearched) {
    return (
      <Typography size="xxl" textAlign="center">
        No results found
      </Typography>
    )
  }

  return (
    <Typography size="xxl" textAlign="center">
      Try to find dog
    </Typography>
  )
}
