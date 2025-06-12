'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Button } from '@/components/button'
import { ControlledTextarea } from '@/components/controlled-textarea'
import { ControlledTextField } from '@/components/controlled-textfield'
import { Gap } from '@/components/gap'
import { Notification } from '@/components/notification'
import { Typography } from '@/components/typography'
import { CONTACT_US_DEFAULT_VALUES } from '@/contstants/constants'
import type {
  ValidationContactUsSchemaType,
  NotificationState,
} from '@/contstants/types'
import { validationContactUsSchema } from '@/contstants/validation'
import { contactUsService } from '@/services'

import {
  Border,
  Description,
  FieldBlock,
  StyledLink,
  SubmitAction,
  SubmitForm,
  Wrapper,
} from './styled'

export const ContactUsPage = () => {
  const methods = useForm<ValidationContactUsSchemaType>({
    defaultValues: CONTACT_US_DEFAULT_VALUES,
    mode: 'onChange',
    resolver: yupResolver(validationContactUsSchema),
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
      await contactUsService(formData)
      reset()
      setNotification({
        visible: true,
        type: 'success',
        message: 'Thank you, we will contact you.',
      })
    } catch (error) {
      console.error(error)
      setNotification({
        visible: true,
        type: 'error',
        message: 'Sorry, something went wrong. Please try again later.',
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
      <FormProvider {...methods}>
        <SubmitForm onSubmit={onSubmit}>
          <FieldBlock>
            <ControlledTextField
              fieldName="firstName"
              placeholder="First Name"
            />
            <ControlledTextField fieldName="lastName" placeholder="Last Name" />
          </FieldBlock>
          <Gap size={70} />
          <FieldBlock>
            <ControlledTextField fieldName="email" placeholder="Email" />
            <ControlledTextField
              fieldName="phoneNumber"
              placeholder="Phone Number"
            />
          </FieldBlock>
          <Gap size={70} />
          <ControlledTextarea
            fieldName="message"
            placeholder="Your message goes here ..."
            height={317}
          />
          <Gap size={100} />
          <SubmitAction>
            <Button type="submit" isLoading={loading}>
              Submit
            </Button>
          </SubmitAction>
        </SubmitForm>
      </FormProvider>
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
