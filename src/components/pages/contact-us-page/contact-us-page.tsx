'use client'

import React from 'react'
import { FormProvider } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/button'
import {
  ControlledTextarea,
  ControlledTextField,
} from '@/components/controlled-fields'
import { Notification } from '@/components/notification'
import { Typography } from '@/components/typography'
import { useContactUsForm } from '@/hooks'

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
  const { methods, loading, notification, onSubmit, onCloseNotification } =
    useContactUsForm()

  return (
    <Wrapper>
      <Typography
        size="xxxxl"
        textAlign="center"
        marginBt="s"
        as="h2"
        dataTestId="contact-us-page-title"
      >
        {t('contact.contact')}
      </Typography>
      <Border />
      <Typography
        size="mL"
        as="h3"
        textAlign="center"
        marginBt="huge"
        marginTp="xl"
        dataTestId="contact-us-description"
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
              dataTestId="contact-us-firstName-field"
            />
            <ControlledTextField
              fieldName="lastName"
              placeholder={t('inputs.lastName')}
              dataTestId="contact-us-lastName-field"
            />
          </FieldBlock>
          <FieldBlock>
            <ControlledTextField
              fieldName="email"
              placeholder={t('inputs.email')}
              dataTestId="contact-us-email-field"
            />
            <ControlledTextField
              fieldName="phoneNumber"
              placeholder={t('inputs.phoneNumber')}
              dataTestId="contact-us-phoneNumber-field"
            />
          </FieldBlock>
          <ControlledTextarea
            fieldName="message"
            placeholder={t('inputs.contactMessage')}
            dataTestId="contact-us-message-field"
            height={317}
          />
          <SubmitAction>
            <Button
              type="submit"
              isLoading={loading}
              fullWidth
              dataTestId="contact-us-submit-button"
            >
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
          dataTestId="contact-us-notification"
        />
      )}
    </Wrapper>
  )
}
