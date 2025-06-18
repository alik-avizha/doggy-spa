'use client'

import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Typography } from '@/components/typography'
import { ANIMAL_CARRY, DOG_COLLARS } from '@/constants'
import { Routes } from '@/constants/routes'

import { AnimalInfoList } from './animal-info-list'
import { SignUp } from './sign-up'
import { InfoBlock, SignUpWrapper, Wrapper } from './styled'

export const HomePage = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const handleBookClick = () => {
    router.push(Routes[3].href)
  }

  return (
    <>
      <Wrapper>
        <InfoBlock>
          <Typography
            data-test-id="page-title"
            size="xxxl"
            textAlign="center"
            marginBt="xxl"
            as="h1"
          >
            {t('home.bookYour')}
          </Typography>
          <Button onClick={handleBookClick}>{t('home.bookAppointment')}</Button>
        </InfoBlock>
      </Wrapper>
      <SignUpWrapper>
        <Card width={552} height={552} url="/images/anthony.webp" />
        <SignUp />
      </SignUpWrapper>
      <AnimalInfoList
        title={t('home.dogCollars')}
        titleButton={t('home.seeMoreDogCollars')}
        items={DOG_COLLARS}
      />
      <AnimalInfoList
        title={t('home.animalCarry')}
        titleButton={t('home.seeMoreCarryOns')}
        items={ANIMAL_CARRY}
      />
    </>
  )
}
