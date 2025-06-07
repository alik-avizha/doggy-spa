'use client'

import { TextAreaField } from '../../textarea'

import { Gap } from '@/components/gap'
import { TextField } from '@/components/textfield'
import { Typography } from '@/components/typography'

import {
  Border,
  Description,
  StyledLink,
  Wrapper,
  FieldBlock,
  SubmitForm,
  SubmitAction,
  ButtonStyled,
} from './styled'

export const ContactUsPage = () => (
  <Wrapper>
    <Typography variant="size_70" textAlign="center">
      Contact
    </Typography>
    <Gap size={20} />
    <Border />
    <Gap size={40} />
    <Description variant="size_30" as="h3" textAlign="center">
      For customer service inquiries, please email us at{' '}
      <StyledLink>customerservice@luxeanimalspa.ca.</StyledLink> For spa
      inquiries, please include your animal’s name for faster service. For your
      protection, please do not include your credit card or banking information
      details in your email.
    </Description>
    <Gap size={140} />
    <SubmitForm>
      <FieldBlock>
        <TextField placeholder="First Name" />
        <TextField placeholder="Last Name" />
      </FieldBlock>
      <Gap size={70} />
      <FieldBlock>
        <TextField placeholder="Email" />
        <TextField placeholder="Phone number" />
      </FieldBlock>
      <Gap size={70} />
      <TextAreaField placeholder="Your message goes here ..." height={317} />
      <Gap size={100} />
      <SubmitAction>
        <ButtonStyled>Submit</ButtonStyled>
      </SubmitAction>
    </SubmitForm>
  </Wrapper>
)
