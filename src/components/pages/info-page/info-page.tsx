'use client'

import { FormProvider } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { ControlledTextField } from '@/components/controlled-fields'
import { Notification } from '@/components/notification'
import { Typography } from '@/components/typography'
import { useDogSearch } from '@/hooks'

import { SearchInfo } from './search-info'
import {
  SearchBlock,
  SelectionBlock,
  TextFieldWrapper,
  Wrapper,
} from './styled'

export const InfoPage = () => {
  const { t } = useTranslation()
  const { methods, data, hasSearched, notification, onCloseNotify, loading } =
    useDogSearch()

  return (
    <FormProvider {...methods}>
      <Wrapper>
        <Typography
          size="xxxxl"
          textAlign="center"
          marginBt="huge"
          as="h2"
          dataTestId="info-page-title"
        >
          {t('info.infoDog')}
        </Typography>
        <SearchBlock>
          <SelectionBlock>
            <Typography
              size="xl"
              marginBt="xs"
              dataTestId="info-page-current-selection-label"
            >
              {t('info.currentSelection')}
            </Typography>
            {data && (
              <Typography
                size="xl"
                fontFamily="cormorant"
                color="pinkKisses"
                dataTestId="info-page-current-selection"
              >
                {data?.breed_group}
              </Typography>
            )}
          </SelectionBlock>
          <TextFieldWrapper>
            <ControlledTextField
              fieldName="search"
              placeholder={t('inputs.search')}
              type="searchType"
              dataTestId="info-page-search-input"
              loading={loading}
            />
          </TextFieldWrapper>
        </SearchBlock>
        <SearchInfo data={data} hasSearched={hasSearched} />
        {notification && (
          <Notification
            message={t('notification.anErrorOccurred')}
            type="error"
            onClose={onCloseNotify}
            dataTestId="info-page-notification"
          />
        )}
      </Wrapper>
    </FormProvider>
  )
}
