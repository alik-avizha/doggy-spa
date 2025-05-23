import React from 'react'

import { InfoBlock, SignUpWrapper, Text, Wrapper } from '@/app/styled.css'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { SignUp } from '@/components/sign-up'

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
  </div>
)
