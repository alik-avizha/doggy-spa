'use client'

import { useTranslation } from 'react-i18next'

import { Typography } from '@/components/typography'
import { SPA_SERVICES } from '@/constants'

import { Border, Description, InfoWrapper, Wrapper } from './styled'

export const SpaServicesPage = () => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Typography
        size="xxxxl"
        textAlign="center"
        marginBt="xxl"
        as="h2"
        dataTestId="spa-services-page-title"
      >
        {t('spaServices.spaServices')}
      </Typography>
      <Border />
      <InfoWrapper>
        {SPA_SERVICES.map(({ titleKey, price, descriptionKey }, index) => (
          <div key={titleKey} data-testid={`spa-service-item-${index}`}>
            <Typography
              size="xl"
              textAlign="center"
              marginTp="xxl"
              marginBt="xs"
              as="h3"
              dataTestId={`spa-service-title-${index}`}
            >
              {t(titleKey)}
            </Typography>
            <Typography
              size="xl"
              textAlign="center"
              marginBt="l"
              dataTestId={`spa-service-price-${index}`}
            >
              {price}
            </Typography>
            <Description
              size="xl"
              fontWeight="s"
              textAlign="center"
              marginBt="xxl"
              dataTestId={`spa-service-description-${index}`}
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
