'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Typography } from '@/components/typography'
import { ANIMAL_CARRY, DOG_COLLARS } from '@/constants'
import { Routes } from '@/constants/routes'

import { AnimalInfoList } from './animal-info-list'
import { SignUp } from './sign-up'
import { InfoBlock, SignUpWrapper, Wrapper } from './styled'

export const HomePage = () => {
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
            Book your doggy spa day!
          </Typography>
          <Button onClick={handleBookClick}>Book Appointment</Button>
        </InfoBlock>
      </Wrapper>
      <SignUpWrapper>
        <Card width={552} height={552} url="/images/anthony.webp" />
        <SignUp />
      </SignUpWrapper>
      <AnimalInfoList
        title="Dog Collars"
        titleButton="See More Dog Collars"
        items={DOG_COLLARS}
      />
      <AnimalInfoList
        title="Animal Carry Ons"
        titleButton="See More Carry Ons"
        items={ANIMAL_CARRY}
      />
    </>
  )
}
