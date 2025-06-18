'use client'

import { useTranslation } from 'react-i18next'

import { Typography } from '@/components/typography'

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
        <Typography
          size="xl"
          textAlign="center"
          marginTp="xxl"
          marginBt="xs"
          as="h3"
        >
          {t('spaServices.treatment')}
        </Typography>
        <Typography size="xl" textAlign="center" marginBt="l">
          $549
        </Typography>
        <Description size="xl" fontWeight="s" textAlign="center" marginBt="xxl">
          {t('spaServices.bath')}
        </Description>
        <Typography
          size="xl"
          textAlign="center"
          marginTp="xxl"
          marginBt="xs"
          as="h3"
        >
          {t('spaServices.massage')}
        </Typography>
        <Typography size="xl" textAlign="center" marginBt="l">
          $149
        </Typography>
        <Description size="xl" fontWeight="s" textAlign="center" marginBt="xxl">
          {t('spaServices.massagingOfThePaws')}
        </Description>
        <Typography
          size="xl"
          textAlign="center"
          marginTp="xxl"
          marginBt="xs"
          as="h3"
        >
          {t('spaServices.facialAndFurCleanseTreatment')}
        </Typography>
        <Typography size="xl" textAlign="center" marginBt="l">
          $269
        </Typography>
        <Description size="xl" fontWeight="s" textAlign="center" marginBt="xxl">
          {t('spaServices.dogsReceive')}
        </Description>
        <Typography
          size="xl"
          textAlign="center"
          marginTp="xxl"
          marginBt="xs"
          as="h3"
        >
          {t('spaServices.catFacialAndFurCleanseTreatment')}
        </Typography>
        <Typography size="xl" textAlign="center" marginBt="l">
          $219
        </Typography>
        <Description size="xl" fontWeight="s" textAlign="center" marginBt="xxl">
          {t('spaServices.catReceivesAFacial')}
        </Description>
        <Typography
          size="xl"
          textAlign="center"
          marginTp="xxl"
          marginBt="xs"
          as="h3"
        >
          {t('spaServices.catAndDogSwimSpaRetreat')}
        </Typography>
        <Typography size="xl" textAlign="center" marginBt="l">
          $999
        </Typography>
        <Description size="xl" fontWeight="s" textAlign="center" marginBt="xxl">
          {t('spaServices.takeYourAnimal')}
        </Description>
      </InfoWrapper>
      <Border />
    </Wrapper>
  )
}
