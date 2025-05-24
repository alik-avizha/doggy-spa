'use client'

import { InstagramIcon } from '@/assets/instagram'
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
} from '@/components/footer/styled.css'
import { TextField } from '@/components/textfield'
import { Typography } from '@/components/typography'

export const Footer = () => (
  <Wrapper>
    <MainBlock>
      <LeftBlock>
        <Title variant="size_32">Customer Service</Title>
        <NavigationItem variant="size_26">Blog</NavigationItem>
        <NavigationItem variant="size_26">Cancellations</NavigationItem>
        <NavigationItem variant="size_26">Track Your Animal</NavigationItem>
        <NavigationItem variant="size_26">
          Luxe’s Annual Spa Day 2021
        </NavigationItem>
        <NavigationItem variant="size_26">Payment Options</NavigationItem>
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
        <NavigationItem variant="size_26">Home</NavigationItem>
        <NavigationItem variant="size_26">About Us</NavigationItem>
        <NavigationItem variant="size_26">Contact Us</NavigationItem>
        <NavigationItem variant="size_26">FAQs</NavigationItem>
        <NavigationItem variant="size_26">Help with navigation</NavigationItem>
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
