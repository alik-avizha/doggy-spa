'use client'

import { useTranslation } from 'react-i18next'

import { Card } from '@/components/card'
import { Typography } from '@/components/typography'

import { CardTextWrapper, Description, TextBlock, Wrapper } from './styled'

export const BlogPage = () => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Typography
        size="xxxxl"
        textAlign="center"
        marginBt="s"
        as="h2"
        dataTestId="blog-page-title"
      >
        {t('blog.theBark')}
      </Typography>
      <Typography
        fontWeight="s"
        fontFamily="tangerine"
        size="xxl"
        as="h3"
        textAlign="center"
        marginBt="xxl"
      >
        {t('blog.whereToRead')}
      </Typography>
      <Typography size="xl">{t('blog.rexTheDog')}</Typography>
      <CardTextWrapper>
        <Card width={628} height={562} url="/images/darinka.webp" border={6} />
        <TextBlock>
          <Description size="mL" fontWeight="s" textAlign="center">
            {t('blog.sometimesIt')}
          </Description>
        </TextBlock>
      </CardTextWrapper>
      <CardTextWrapper>
        <TextBlock>
          <Description size="mL" fontWeight="s" textAlign="center">
            {t('blog.oneDay')}
          </Description>
        </TextBlock>
        <Card width={644} height={584} url="/images/matthew.webp" border={6} />
      </CardTextWrapper>
    </Wrapper>
  )
}
