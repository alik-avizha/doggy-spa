'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Button } from '@/components/button'
import { ControlledTextField } from '@/components/controlled-fields'
import { Gap } from '@/components/gap'
import {
  FacebookIcon,
  InstagramIcon,
  NetworkIcon,
  SnapchatIcon,
  TwitterIcon,
} from '@/components/icons'
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
  PrivacyBlock,
  RightBlock,
  SubmitForm,
  Wrapper,
} from './styled'

export const Footer = () => {
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
      <MainBlock>
        <LeftBlock>
          <Typography size={32}>Customer Service</Typography>
          <Gap size={30} />
          <NavigationItem href={Routes[4].href}>Blog</NavigationItem>
          <NavigationItem href={Routes[0].href}>Cancellations</NavigationItem>
          <NavigationItem href={Routes[0].href}>
            Track Your Animal
          </NavigationItem>
          <NavigationItem href={Routes[0].href}>
            Luxe’s Annual Spa Day 2021
          </NavigationItem>
          <NavigationItem href={Routes[0].href}>Payment Options</NavigationItem>
        </LeftBlock>
        <CenterBlock>
          <Typography size={32}>Subscribe to our Newsletter</Typography>
          <Gap size={30} />
          <FormProvider {...methods}>
            <SubmitForm onSubmit={onSubmit}>
              <ControlledTextField fieldName="email" placeholder="Email" />
              <Button type="submit" isLoading={loading}>
                Submit
              </Button>
            </SubmitForm>
          </FormProvider>
          <Typography size={32}>Connect With Us On Social Media</Typography>
          <Gap size={30} />
          <IconsBlock>
            <InstagramIcon />
            <FacebookIcon />
            <NetworkIcon />
            <TwitterIcon />
            <SnapchatIcon />
          </IconsBlock>
        </CenterBlock>
        <RightBlock>
          <Typography size={32}>Navigation</Typography>
          <Gap size={30} />
          <NavigationItem href={Routes[0].href}>Home</NavigationItem>
          <NavigationItem href={Routes[5].href}>About Us</NavigationItem>
          <NavigationItem href={Routes[6].href}>Contact Us</NavigationItem>
          <NavigationItem href={Routes[0].href}>FAQs</NavigationItem>
          <NavigationItem href={Routes[0].href}>
            Help with navigation
          </NavigationItem>
        </RightBlock>
      </MainBlock>
      <BottomBlock>
        <CookiesBlock>
          <Typography size={22} fontWeight={400}>
            Cookie Policy
          </Typography>
          <Typography size={22} fontWeight={400}>
            Cookies Settings
          </Typography>
        </CookiesBlock>
        <Typography size={22} fontWeight={400}>
          Copyright 2021 Luxe Animal Spa, LLC. All rights reserved.
        </Typography>
        <PrivacyBlock>
          <Typography size={22} fontWeight={400}>
            Terms
          </Typography>
          <Typography size={22} fontWeight={400}>
            Privacy
          </Typography>
          <Typography size={22} fontWeight={400}>
            Security
          </Typography>
        </PrivacyBlock>
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
