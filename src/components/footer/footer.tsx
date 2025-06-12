'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Button } from '@/components/button'
import { ControlledTextField } from '@/components/controlled-textfield'
import {
  FacebookIcon,
  InstagramIcon,
  NetworkIcon,
  SnapchatIcon,
  TwitterIcon,
} from '@/components/icons'
import { Typography } from '@/components/typography'
import { SUBSCRIBE_TO_LETTER_DEFAULT_VALUES } from '@/contstants/constants'
import { Routes } from '@/contstants/routes'
import type { ValidationSubscribeToLettersSchemaType } from '@/contstants/types'
import { validationSubscribeToLetterSchema } from '@/contstants/validation'
import { subscribeToNewsletterService } from '@/services'

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
  Title,
  Wrapper,
} from './styled'

export const Footer = () => {
  const methods = useForm<ValidationSubscribeToLettersSchemaType>({
    defaultValues: SUBSCRIBE_TO_LETTER_DEFAULT_VALUES,
    mode: 'onBlur',
    resolver: yupResolver(validationSubscribeToLetterSchema),
  })
  const { handleSubmit, reset } = methods

  const onSubmit = handleSubmit(
    (formData: ValidationSubscribeToLettersSchemaType) => {
      subscribeToNewsletterService(formData).then(() => {
        reset()
        // нотификацию добавить
        // лоадеры добавить
      })
    }
  )

  return (
    <Wrapper>
      <MainBlock>
        <LeftBlock>
          <Title variant="size_32">Customer Service</Title>
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
          <Title variant="size_32">Subscribe to our Newsletter</Title>
          <FormProvider {...methods}>
            <SubmitForm onSubmit={onSubmit}>
              <ControlledTextField fieldName="email" placeholder="Email" />
              <Button type="submit">Submit</Button>
            </SubmitForm>
          </FormProvider>
          <Title variant="size_32">Connect With Us On Social Media</Title>
          <IconsBlock>
            <InstagramIcon />
            <FacebookIcon />
            <NetworkIcon />
            <TwitterIcon />
            <SnapchatIcon />
          </IconsBlock>
        </CenterBlock>
        <RightBlock>
          <Title variant="size_32">Navigation</Title>
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
          <Typography variant="size_22">Cookie Policy</Typography>
          <Typography variant="size_22">Cookies Settings</Typography>
        </CookiesBlock>
        <Typography variant="size_22">
          Copyright 2021 Luxe Animal Spa, LLC. All rights reserved.
        </Typography>
        <PrivacyBlock>
          <Typography variant="size_22">Terms</Typography>
          <Typography variant="size_22">Privacy</Typography>
          <Typography variant="size_22">Security</Typography>
        </PrivacyBlock>
      </BottomBlock>
    </Wrapper>
  )
}
