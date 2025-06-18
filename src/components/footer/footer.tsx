'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/button'
import { ControlledTextField } from '@/components/controlled-fields'
import {
  FacebookIcon,
  InstagramIcon,
  NetworkIcon,
  SnapchatIcon,
  TwitterIcon,
} from '@/components/icons'
import { LanguageSwitcher } from '@/components/language-switcher'
import { Notification } from '@/components/notification'
import { Typography } from '@/components/typography'
import { SUBSCRIBE_TO_LETTER_DEFAULT_VALUES } from '@/constants'
import { Routes } from '@/constants/routes'
import { validationSubscribeToLetterSchema } from '@/constants/validation'
import { subscribeToNewsletterService } from '@/services'
import type {
  NotificationState,
  ValidationSubscribeToLettersSchemaType,
} from '@/types'

import {
  BottomBlock,
  CenterBlock,
  CookiesBlock,
  IconsBlock,
  LeftBlock,
  MainBlock,
  NavigationItem,
  NetworkItem,
  PrivacyBlock,
  PrivacyItem,
  RightBlock,
  SubmitForm,
  Wrapper,
} from './styled'

export const Footer = () => {
  const { t } = useTranslation()
  const methods = useForm<ValidationSubscribeToLettersSchemaType>({
    defaultValues: SUBSCRIBE_TO_LETTER_DEFAULT_VALUES,
    mode: 'onBlur',
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
        message: t('notification.successfullySubscribed'),
      })
    } catch (error) {
      console.error(error)
      setNotification({
        visible: true,
        type: 'error',
        message: t('notification.subscriptionFailed'),
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
      <MainBlock>
        <LeftBlock>
          <Typography size="xl" marginBt="l" as="h4">
            {t('footer.customerService')}
          </Typography>
          <NavigationItem href={Routes[4].href}>
            {t('footer.blog')}
          </NavigationItem>
          <NavigationItem href={Routes[0].href}>
            {t('footer.cancellations')}
          </NavigationItem>
          <NavigationItem href={Routes[0].href}>
            {t('footer.trackYourAnimal')}
          </NavigationItem>
          <NavigationItem href={Routes[0].href}>
            {t('footer.luxesAnnualSpaDay')}
          </NavigationItem>
          <NavigationItem href={Routes[0].href}>
            {t('footer.paymentOptions')}
          </NavigationItem>
        </LeftBlock>
        <CenterBlock>
          <Typography size="xl" marginBt="l" as="h4">
            {t('footer.subscribeToOurNewsletter')}
          </Typography>
          <FormProvider {...methods}>
            <SubmitForm onSubmit={onSubmit}>
              <ControlledTextField
                fieldName="email"
                placeholder={t('inputs.email')}
              />
              <Button type="submit" isLoading={loading}>
                {t('footer.submit')}
              </Button>
            </SubmitForm>
          </FormProvider>
          <Typography size="xl" marginBt="l" as="h4">
            {t('footer.connectWithUs')}
          </Typography>
          <IconsBlock>
            <NetworkItem href={Routes[0].href}>
              <InstagramIcon />
            </NetworkItem>
            <NetworkItem href={Routes[0].href}>
              <FacebookIcon />
            </NetworkItem>
            <NetworkItem href={Routes[0].href}>
              <NetworkIcon />
            </NetworkItem>
            <NetworkItem href={Routes[0].href}>
              <TwitterIcon />
            </NetworkItem>
            <NetworkItem href={Routes[0].href}>
              <SnapchatIcon />
            </NetworkItem>
          </IconsBlock>
        </CenterBlock>
        <RightBlock>
          <Typography size="xl" marginBt="l" as="h4">
            {t('footer.navigation')}
          </Typography>
          <NavigationItem href={Routes[0].href}>
            {t('footer.home')}
          </NavigationItem>
          <NavigationItem href={Routes[5].href}>
            {t('footer.aboutUs')}
          </NavigationItem>
          <NavigationItem href={Routes[6].href}>
            {t('footer.contactUs')}
          </NavigationItem>
          <NavigationItem href={Routes[0].href}>
            {t('footer.faqs')}
          </NavigationItem>
          <NavigationItem href={Routes[0].href}>
            {t('footer.helpWithNavigation')}
          </NavigationItem>
        </RightBlock>
      </MainBlock>
      <BottomBlock>
        <CookiesBlock>
          <PrivacyItem href={Routes[0].href}>
            {t('footer.cookiePolicy')}
          </PrivacyItem>
          <PrivacyItem href={Routes[0].href}>
            {t('footer.cookiesSettings')}
          </PrivacyItem>
        </CookiesBlock>
        <Typography size="m" fontWeight="s">
          {t('footer.copyright')}
        </Typography>
        <PrivacyBlock>
          <PrivacyItem href={Routes[0].href}>{t('footer.terms')}</PrivacyItem>
          <PrivacyItem href={Routes[0].href}>{t('footer.privacy')}</PrivacyItem>
          <PrivacyItem href={Routes[0].href}>
            {t('footer.security')}
          </PrivacyItem>
        </PrivacyBlock>
        <LanguageSwitcher />
      </BottomBlock>
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
