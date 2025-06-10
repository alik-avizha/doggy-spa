'use client'

import { TextAreaField } from '../../textarea'

import { Button } from '@/components/button'
import { Gap } from '@/components/gap'
import { Typography } from '@/components/typography'
import { CONTACT_US_DEFAULT_VALUES } from '@/contstants/constants'
import type { ValidationContactUsSchemaType } from '@/contstants/types'
import { validationContactUsSchema } from '@/contstants/validation'
import { useForm } from '@/hooks'
import { contactUsService } from '@/services'

import {
  Border,
  Description,
  StyledLink,
  Wrapper,
  FieldBlock,
  SubmitForm,
  SubmitAction,
  TextFieldsStyled,
} from './styled'

export const ContactUsPage = () => {
  const { formAction, register, errors } =
    useForm<ValidationContactUsSchemaType>(
      contactUsService,
      CONTACT_US_DEFAULT_VALUES,
      validationContactUsSchema
    )

  return (
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
        inquiries, please include your animal’s name for faster service. For
        your protection, please do not include your credit card or banking
        information details in your email.
      </Description>
      <Gap size={140} />
      <SubmitForm action={formAction}>
        <FieldBlock>
          <TextFieldsStyled
            {...register('firstName')}
            errorMessage={errors.firstName}
            placeholder="First Name"
          />
          <TextFieldsStyled
            {...register('lastName')}
            errorMessage={errors.lastName}
            placeholder="Last Name"
          />
        </FieldBlock>
        <Gap size={70} />
        <FieldBlock>
          <TextFieldsStyled
            {...register('email')}
            errorMessage={errors.email}
            placeholder="Email"
          />
          <TextFieldsStyled
            {...register('phoneNumber')}
            errorMessage={errors.phoneNumber}
            placeholder="Phone number"
          />
        </FieldBlock>
        <Gap size={70} />
        <TextAreaField
          {...register('message')}
          errorMessage={errors.message}
          placeholder="Your message goes here ..."
          height={317}
        />
        <Gap size={100} />
        <SubmitAction>
          <Button type="submit">Submit</Button>
        </SubmitAction>
      </SubmitForm>
    </Wrapper>
  )
}
