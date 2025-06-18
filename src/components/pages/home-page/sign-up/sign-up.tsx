import { FormProvider } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Card } from '@/components/card'
import { Notification } from '@/components/notification'
import { Typography } from '@/components/typography'
import { useSubscribeToNewsletter } from '@/hooks'

import {
  DescriptionBlock,
  FormBlock,
  LeftBlock,
  StyledButton,
  StyledTextField,
  TitleBlock,
  Wrapper,
} from './styled'

export const SignUp = () => {
  const { t } = useTranslation()
  const { methods, loading, notification, onSubmit, onCloseNotification } =
    useSubscribeToNewsletter()

  return (
    <Wrapper>
      <LeftBlock>
        <TitleBlock>
          <Typography
            size="xl"
            fontFamily="cinzelDecorative"
            fontWeight="s"
            textTransForm="uppercase"
            as="h3"
          >
            {t('home.signUpTitle')}
          </Typography>
        </TitleBlock>
        <Typography size="m" fontWeight="s" marginBt="xl">
          {t('home.get')}{' '}
        </Typography>
        <FormProvider {...methods}>
          <FormBlock onSubmit={onSubmit}>
            <StyledTextField
              fieldName="email"
              placeholder={t('inputs.email')}
            />
            <StyledButton type="submit" isLoading={loading}>
              {t('home.signUpButton')}
            </StyledButton>
            <DescriptionBlock>
              <Typography size="x" fontWeight="s" textAlign="center">
                {t('home.byCompleting')}
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
