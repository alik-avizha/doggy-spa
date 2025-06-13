import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Gap } from '@/components/gap'
import { Notification } from '@/components/notification'
import { Typography } from '@/components/typography'
import { SUBSCRIBE_TO_LETTER_DEFAULT_VALUES } from '@/constants'
import { validationSubscribeToLetterSchema } from '@/constants/validation'
import { subscribeToNewsletterService } from '@/services'
import type {
  NotificationState,
  ValidationSubscribeToLettersSchemaType,
} from '@/types'

import {
  DescriptionBlock,
  FormBlock,
  LeftBlock,
  StyledTextField,
  TitleBlock,
  Wrapper,
} from './styled'

export const SignUp = () => {
  const methods = useForm<ValidationSubscribeToLettersSchemaType>({
    defaultValues: SUBSCRIBE_TO_LETTER_DEFAULT_VALUES,
    mode: 'onChange',
    resolver: yupResolver(validationSubscribeToLetterSchema),
  })
  const { handleSubmit, reset } = methods

  const [loading, setLoading] = useState(false)
  const [notification, setNotification] = useState<NotificationState>({
    visible: false,
    type: 'success',
    message: '',
  })

  const onSubmit = handleSubmit(async formData => {
    try {
      setLoading(true)
      await subscribeToNewsletterService(formData)
      reset()
      setNotification({
        visible: true,
        type: 'success',
        message: 'You have successfully subscribed!',
      })
    } catch (error) {
      console.error(error)
      setNotification({
        visible: true,
        type: 'error',
        message: 'Subscription failed. Please try again.',
      })
    } finally {
      setLoading(false)
    }
  })
  const onCloseNotification = () => {
    setNotification(prev => ({ ...prev, visible: false }))
  }

  return (
    <Wrapper>
      <LeftBlock>
        <TitleBlock>
          <Typography
            size={30}
            fontFamily="Cinzel Decorative"
            fontWeight={400}
            textTransForm="uppercase"
          >
            Sign Up to Bark Newsletter
          </Typography>
        </TitleBlock>
        <Gap size={40} />
        <Typography size={22} fontWeight={400}>
          Get 10% Off Your First Spa Treatment{' '}
        </Typography>
        <Gap size={40} />
        <FormProvider {...methods}>
          <FormBlock onSubmit={onSubmit}>
            <StyledTextField fieldName="email" placeholder="Email" />
            <Gap size={40} />
            <Button type="submit" isLoading={loading}>
              Sign Up
            </Button>
            <Gap size={40} />
            <DescriptionBlock>
              <Typography size={14} fontWeight={400} textAlign="center">
                *By completing this form you are signing up to receive our
                emails and can unsubscribe at any time.
              </Typography>
            </DescriptionBlock>
          </FormBlock>
        </FormProvider>
      </LeftBlock>
      <Card width={466} height={430} url="/images/kisa.webp" />
      {notification.visible && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={onCloseNotification}
        />
      )}
    </Wrapper>
  )
}
