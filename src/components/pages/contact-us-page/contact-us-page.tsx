import React from 'react'

import { TextAreaField } from '@/components/textarea'
import { TextField } from '@/components/textfield'

import {
  Border,
  Description,
  StyledLink,
  Title,
  Wrapper,
  FieldBlock,
  SubmitForm,
  SubmitAction,
  ButtonStyled,
} from './styled.css'

export const ContactUsPage = () => (
  <Wrapper>
    <Title variant="size_70">Contact</Title>
    <Border />
    <Description variant="size_30" as="h3">
      For customer service inquiries, please email us at{' '}
      <StyledLink>customerservice@luxeanimalspa.ca.</StyledLink> For spa
      inquiries, please include your animal’s name for faster service. For your
      protection, please do not include your credit card or banking information
      details in your email.
    </Description>
    <SubmitForm>
      <FieldBlock>
        <TextField placeholder="First Name" />
        <TextField placeholder="Last Name" />
      </FieldBlock>
      <FieldBlock>
        <TextField placeholder="Email" />
        <TextField placeholder="Phone number" />
      </FieldBlock>
      <TextAreaField placeholder="Your message goes here ..." />
      <SubmitAction>
        <ButtonStyled>Submit</ButtonStyled>
      </SubmitAction>
    </SubmitForm>
  </Wrapper>
)
