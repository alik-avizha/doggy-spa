'use client'

import { useTranslation } from 'react-i18next'

import { Typography } from '@/components/typography'
import { SPA_SERVICES } from '@/constants'

import { Border, Description, InfoWrapper, Wrapper } from './styled'

export const SpaServicesPage = () => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Typography size="xxxxl" textAlign="center" marginBt="xxl" as="h2">
        {t('spaServices.spaServices')}
      </Typography>
      <Border />
      <InfoWrapper>
        {SPA_SERVICES.map(({ titleKey, price, descriptionKey }) => (
          <div key={titleKey}>
            <Typography
              size="xl"
              textAlign="center"
              marginTp="xxl"
              marginBt="xs"
              as="h3"
            >
              {t(titleKey)}
            </Typography>
            <Typography size="xl" textAlign="center" marginBt="l">
              {price}
            </Typography>
            <Description
              size="xl"
              fontWeight="s"
              textAlign="center"
              marginBt="xxl"
            >
              {t(descriptionKey)}
            </Description>
          </div>
        ))}
      </InfoWrapper>
      <Border />
    </Wrapper>
  )
}
