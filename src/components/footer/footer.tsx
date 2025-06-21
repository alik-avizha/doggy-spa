'use client'

import { FormProvider } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/button'
import { ControlledTextField } from '@/components/controlled-fields'
import { LanguageSwitcher } from '@/components/language-switcher'
import { Notification } from '@/components/notification'
import { Typography } from '@/components/typography'
import { NAVIGATION_LINKS, NETWORK_LINKS } from '@/constants'
import { useSubscribeToNewsletter } from '@/hooks'

import { FooterNavigationLinks } from './footer-navigation-links'
import {
  BottomBlock,
  CenterBlock,
  CookiesBlock,
  IconsBlock,
  LeftBlock,
  MainBlock,
  NetworkItem,
  PrivacyBlock,
  PrivacyItem,
  RightBlock,
  SubmitForm,
  Wrapper,
} from './styled'

export const Footer = () => {
  const { t } = useTranslation()
  const { methods, loading, notification, onSubmit, onCloseNotification } =
    useSubscribeToNewsletter()

  return (
    <Wrapper>
      <MainBlock>
        <LeftBlock>
          <Typography size="xl" marginBt="l" as="h4">
            {t('footer.customerService')}
          </Typography>
          <FooterNavigationLinks links={NAVIGATION_LINKS.left} />
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
                dataTestId="footer-email-field"
              />
              <Button
                type="submit"
                isLoading={loading}
                dataTestId="footer-submit-button"
              >
                {t('footer.submit')}
              </Button>
            </SubmitForm>
          </FormProvider>
          <Typography size="xl" marginBt="l" as="h4">
            {t('footer.connectWithUs')}
          </Typography>
          <IconsBlock>
            {NETWORK_LINKS.map(({ Icon, href }, index) => (
              <NetworkItem
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </NetworkItem>
            ))}
          </IconsBlock>
        </CenterBlock>
        <RightBlock>
          <Typography size="xl" marginBt="l" as="h4">
            {t('footer.navigation')}
          </Typography>
          <FooterNavigationLinks links={NAVIGATION_LINKS.right} />
        </RightBlock>
      </MainBlock>
      <BottomBlock>
        <CookiesBlock>
          <FooterNavigationLinks
            links={NAVIGATION_LINKS.cookies}
            renderAs={PrivacyItem}
          />
        </CookiesBlock>
        <Typography size="m" fontWeight="s">
          {t('footer.copyright')}
        </Typography>
        <PrivacyBlock>
          <FooterNavigationLinks
            links={NAVIGATION_LINKS.privacy}
            renderAs={PrivacyItem}
          />
        </PrivacyBlock>
        <LanguageSwitcher />
      </BottomBlock>
      {notification.visible && (
        <Notification
          dataTestId="footer-notification"
          message={notification.message}
          type={notification.type}
          onClose={onCloseNotification}
        />
      )}
    </Wrapper>
  )
}
