import React from 'react'

import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Gap } from '@/components/gap'
import { TextField } from '@/components/textfield'
import { Typography } from '@/components/typography'
import { SUBSCRIBE_TO_LETTER_DEFAULT_VALUES } from '@/contstants/constants'
import type { ValidationSubscribeToLettersSchemaType } from '@/contstants/types'
import { validationSubscribeToLetterSchema } from '@/contstants/validation'
import { useForm } from '@/hooks'
import { subscribeToNewsletterService } from '@/services'

import {
  DescriptionBlock,
  FormBlock,
  LeftBlock,
  TitleBlock,
  Wrapper,
} from './styled'

export const SignUp = () => {
  const { formAction, register, errors } =
    useForm<ValidationSubscribeToLettersSchemaType>(
      subscribeToNewsletterService,
      SUBSCRIBE_TO_LETTER_DEFAULT_VALUES,
      validationSubscribeToLetterSchema
    )

  return (
    <Wrapper>
      <LeftBlock>
        <TitleBlock>
          <Typography variant="size_30" textTransForm="uppercase">
            Sign Up to Bark Newsletter
          </Typography>
        </TitleBlock>
        <Gap size={40} />
        <Typography variant="size_22">
          Get 10% Off Your First Spa Treatment{' '}
        </Typography>
        <Gap size={40} />
        <FormBlock action={formAction}>
          <TextField
            {...register('email')}
            errorMessage={errors.email}
            placeholder="Email"
          />
          <Gap size={40} />
          <Button type="submit">Sign Up</Button>
          <Gap size={40} />
          <DescriptionBlock>
            <Typography variant="size_14" textAlign="center">
              *By completing this form you are signing up to receive our emails
              and can unsubscribe at any time.
            </Typography>
          </DescriptionBlock>
        </FormBlock>
      </LeftBlock>
      <Card width={466} height={430} url="/images/kisa.webp" />
    </Wrapper>
  )
}
