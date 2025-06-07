import styled from '@emotion/styled'
import Image from 'next/image'

import { Typography } from '@/components/typography'

export const Wrapper = styled.div`
  padding: 70px 50px 200px 50px;
`
export const SearchBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const SelectionBlock = styled.div`
  display: flex;
`
export const Description = styled(Typography)`
  font-weight: 700;
  font-family: Cormorant, sans-serif;
`
export const SearchCurrentDog = styled(Typography)`
  font-weight: 700;
  font-family: Cormorant, sans-serif;
  color: #e89b93;
`
export const TextFieldWrapper = styled.div`
  width: 337px;
`
export const PhotoBlock = styled.div`
  background-color: #f3ded7;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ImageStyled = styled(Image)`
  width: 730px;
  height: 486px;
`
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
