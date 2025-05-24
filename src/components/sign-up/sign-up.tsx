import React from 'react'

import { Card } from '@/components/card'
import {
  Description,
  LeftBlock,
  SignBlock,
  StyledButton,
  Text,
  Title,
  Wrapper,
} from '@/components/sign-up/styled.css'
import { TextField } from '@/components/textfield'

export const SignUp = () => (
  <Wrapper>
    <LeftBlock>
      <Title variant="size_30">Sign Up to Bark Newsletter</Title>
      <Description>Get 10% Off Your First Spa Treatment </Description>
      <SignBlock>
        <TextField placeholder="Email" />
        <StyledButton>Sign Up</StyledButton>
        <Text variant="size_14">
          *By completing this form you are signing up to receive our emails and
          can unsubscribe at any time.
        </Text>
      </SignBlock>
    </LeftBlock>
    <Card width={466} height={430} url="/images/doggy.webp" />
  </Wrapper>
)
