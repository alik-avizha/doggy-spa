'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/button'
import {
  ControlledTextarea,
  ControlledTextField,
} from '@/components/controlled-fields'
import { Notification } from '@/components/notification'
import { Typography } from '@/components/typography'
import { CONTACT_US_DEFAULT_VALUES } from '@/constants'
import { validationContactUsSchema } from '@/constants/validation'
import { contactUsService } from '@/services'
import type { NotificationState, ValidationContactUsSchemaType } from '@/types'

import {
  Border,
  FieldBlock,
  StyledLink,
  SubmitAction,
  SubmitForm,
  Wrapper,
} from './styled'

export const ContactUsPage = () => {
  const { t } = useTranslation()
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
        message: t('notification.thankYou'),
      })
    } catch (error) {
      console.error(error)
      setNotification({
        visible: true,
        type: 'error',
        message: t('notification.sorrySomething'),
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
      <Typography size="xxxxl" textAlign="center" marginBt="s" as="h2">
        {t('contact.contact')}
      </Typography>
      <Border />
      <Typography
        size="mL"
        as="h3"
        textAlign="center"
        marginBt="huge"
        marginTp="xl"
      >
        {t('contact.forCustomer')}{' '}
        <StyledLink>customerservice@luxeanimalspa.ca.</StyledLink>{' '}
        {t('contact.forSpa')}
      </Typography>
      <FormProvider {...methods}>
        <SubmitForm onSubmit={onSubmit}>
          <FieldBlock>
            <ControlledTextField
              fieldName="firstName"
              placeholder={t('inputs.firstName')}
            />
            <ControlledTextField
              fieldName="lastName"
              placeholder={t('inputs.lastName')}
            />
          </FieldBlock>
          <FieldBlock>
            <ControlledTextField
              fieldName="email"
              placeholder={t('inputs.email')}
            />
            <ControlledTextField
              fieldName="phoneNumber"
              placeholder={t('inputs.phoneNumber')}
            />
          </FieldBlock>
          <ControlledTextarea
            fieldName="message"
            placeholder={t('inputs.contactMessage')}
            height={317}
          />
          <SubmitAction>
            <Button type="submit" isLoading={loading} fullWidth>
              {t('contact.submit')}
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
