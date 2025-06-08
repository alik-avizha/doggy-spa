'use client'

import { InstagramIcon } from '@/components/icons'
import { TextField } from '@/components/textfield'
import { Typography } from '@/components/typography'
import { Routes } from '@/contstants/routes'

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
  SubmitButton,
  SubmitForm,
  Title,
  Wrapper,
} from './styled'

export const Footer = () => (
  <Wrapper>
    <MainBlock>
      <LeftBlock>
        <Title variant="size_32">Customer Service</Title>
        <NavigationItem href={Routes[4].href}>Blog</NavigationItem>
        <NavigationItem href={Routes[0].href}>Cancellations</NavigationItem>
        <NavigationItem href={Routes[0].href}>Track Your Animal</NavigationItem>
        <NavigationItem href={Routes[0].href}>
          Luxe’s Annual Spa Day 2021
        </NavigationItem>
        <NavigationItem href={Routes[0].href}>Payment Options</NavigationItem>
      </LeftBlock>
      <CenterBlock>
        <Title variant="size_32">Subscribe to our Newsletter</Title>
        <SubmitForm>
          <TextField placeholder="Email" />
          <SubmitButton>Submit</SubmitButton>
        </SubmitForm>
        <Title variant="size_32">Connect With Us On Social Media</Title>
        <IconsBlock>
          <InstagramIcon />
          <InstagramIcon />
          <InstagramIcon />
          <InstagramIcon />
          <InstagramIcon />
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
