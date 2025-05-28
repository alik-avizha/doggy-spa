import React from 'react'

import { AnimalInfoList } from '@/components/animal-info-list'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { SignUp } from '@/components/sign-up'
import { ANIMAL_LIST } from '@/contstants/constants'

import { InfoBlock, SignUpWrapper, Text, Wrapper } from './styled.css'

export const HomePage = () => (
  <div>
    <Wrapper>
      <InfoBlock>
        <Text data-test-id="page-title" variant="size_63">
          Book your doggy spa day!
        </Text>
        <Button>Book Appointment</Button>
      </InfoBlock>
    </Wrapper>
    <SignUpWrapper>
      <Card width={552} height={552} url="/images/doggy.webp" />
      <SignUp />
    </SignUpWrapper>
    <AnimalInfoList
      title="Dog Collars"
      titleButton="See More Dog Collars"
      items={ANIMAL_LIST}
    />
    <AnimalInfoList
      title="Dog Collars"
      titleButton="See More Dog Collars"
      items={ANIMAL_LIST}
    />
  </div>
)
