'use client'

import { useRouter } from 'next/navigation'

import { AnimalInfoList } from '@/components/animal-info-list'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Gap } from '@/components/gap'
import { SignUp } from '@/components/sign-up'
import { Typography } from '@/components/typography'
import { ANIMAL_CARRY, DOG_COLLARS } from '@/contstants/constants'
import { Routes } from '@/contstants/routes'

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
            variant="size_63"
            textAlign="center"
          >
            Book your doggy spa day!
          </Typography>
          <Gap size={50} />
          <Button onClick={handleBookClick}>Book Appointment</Button>
        </InfoBlock>
      </Wrapper>
      <Gap size={200} />
      <SignUpWrapper>
        <Card width={552} height={552} url="/images/anthony.webp" />
        <SignUp />
      </SignUpWrapper>
      <Gap size={50} />
      <AnimalInfoList
        title="Dog Collars"
        titleButton="See More Dog Collars"
        items={DOG_COLLARS}
      />
      <Gap size={50} />
      <AnimalInfoList
        title="Animal Carry Ons"
        titleButton="See More Carry Ons"
        items={ANIMAL_CARRY}
      />
      <Gap size={50} />
    </>
  )
}
