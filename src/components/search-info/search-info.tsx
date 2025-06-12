import type { FC } from 'react'

import { Gap } from '@/components/gap/gap'
import { Typography } from '@/components/typography'
import type { Dog } from '@/contstants/types'

import { PhotoBlock, ImageStyled, DescriptionWrapper } from './styled'

interface InfoContentProps {
  data: Dog | null
  hasSearched: boolean
}

export const InfoContent: FC<InfoContentProps> = ({ data, hasSearched }) => {
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
          <Typography variant="size_64">{data.name}</Typography>
        </PhotoBlock>
        <Gap size={100} />
        <DescriptionWrapper>
          <Typography variant="size_40">Bred for: {data.bred_for}</Typography>
          <Typography variant="size_40">
            Temperament: {data.temperament}
          </Typography>
          <Typography variant="size_40">Life span: {data.life_span}</Typography>
        </DescriptionWrapper>
      </>
    )
  }

  if (hasSearched) {
    return (
      <Typography variant="size_40" textAlign="center">
        No results found
      </Typography>
    )
  }

  return (
    <Typography variant="size_40" textAlign="center">
      Try to find dog
    </Typography>
  )
}
