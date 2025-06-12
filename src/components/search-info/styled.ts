import styled from '@emotion/styled'
import Image from 'next/image'

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
