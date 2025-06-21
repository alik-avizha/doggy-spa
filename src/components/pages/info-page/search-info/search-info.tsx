import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Typography } from '@/components/typography'
import type { Dog } from '@/types'

import { PhotoBlock, ImageStyled, DescriptionWrapper } from './styled'

type Props = {
  data: Dog | null
  hasSearched: boolean
}

export const SearchInfo: FC<Props> = ({ data, hasSearched }) => {
  const { t } = useTranslation()

  if (data) {
    return (
      <>
        <PhotoBlock data-testid="search-info-photo-block">
          <ImageStyled
            src={data.image?.url}
            alt={data.name}
            width={200}
            height={200}
            data-testid="search-info-image"
          />
          <Typography size="xxxl" color="black" dataTestId="search-info-name">
            {data.name}
          </Typography>
        </PhotoBlock>
        <DescriptionWrapper>
          <Typography size="xxl" dataTestId="search-info-bred-for">
            {t('info.bredFor')} {data.bred_for}
          </Typography>
          <Typography size="xxl" dataTestId="search-info-temperament">
            {t('info.temperament')} {data.temperament}
          </Typography>
          <Typography size="xxl" dataTestId="search-info-life-span">
            {t('info.lifeSpan')} {data.life_span}
          </Typography>
        </DescriptionWrapper>
      </>
    )
  }

  if (hasSearched) {
    return (
      <Typography
        size="xxl"
        textAlign="center"
        dataTestId="search-info-no-results"
      >
        {t('info.noResultsFound')}
      </Typography>
    )
  }

  return (
    <Typography
      size="xxl"
      textAlign="center"
      dataTestId="search-info-initial-message"
    >
      {t('info.tryToFindDog')}
    </Typography>
  )
}
