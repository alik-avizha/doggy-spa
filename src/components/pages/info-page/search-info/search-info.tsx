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
          <Typography size="xxl">
            {t('info.bredFor')} {data.bred_for}
          </Typography>
          <Typography size="xxl">
            {t('info.temperament')} {data.temperament}
          </Typography>
          <Typography size="xxl">
            {t('info.lifeSpan')} {data.life_span}
          </Typography>
        </DescriptionWrapper>
      </>
    )
  }

  if (hasSearched) {
    return (
      <Typography size="xxl" textAlign="center">
        {t('info.noResultsFound')}
      </Typography>
    )
  }

  return (
    <Typography size="xxl" textAlign="center">
      {t('info.tryToFindDog')}
    </Typography>
  )
}
