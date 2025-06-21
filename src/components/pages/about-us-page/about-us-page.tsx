'use client'

import { useTranslation } from 'react-i18next'

import { Card } from '@/components/card'
import { Typography } from '@/components/typography'

import { CardTextWrapper, Description, TextBlock, Wrapper } from './styled'

export const AboutUsPage = () => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Typography
        size="xxxxl"
        textAlign="center"
        marginBt="m"
        as="h2"
        dataTestId="about-us-page-title"
      >
        {t('aboutUs.aboutUs')}
      </Typography>
      <Typography
        fontWeight="s"
        fontFamily="tangerine"
        size="xxl"
        as="h3"
        textAlign="center"
      >
        {t('aboutUs.ourOwners')}
      </Typography>
      <CardTextWrapper>
        <Card
          width={428}
          height={460}
          url="/images/rectangle_224.webp"
          border={6}
        />
        <TextBlock>
          <Description size="mL" fontWeight="s" textAlign="center">
            {t('aboutUs.hereAtLuxe')}
          </Description>
        </TextBlock>
      </CardTextWrapper>
      <CardTextWrapper>
        <TextBlock>
          <Description size="mL" fontWeight="s" textAlign="center">
            {t('aboutUs.allAnimals')}
          </Description>
        </TextBlock>
        <Card
          width={508}
          height={488}
          url="/images/rectangle_225.webp"
          border={6}
        />
      </CardTextWrapper>
    </Wrapper>
  )
}
