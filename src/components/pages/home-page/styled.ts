import styled from '@emotion/styled'

export const Wrapper = styled.div`
  height: 768px;
  background-image: url('/images/doggy.webp');
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  position: relative;

  margin-bottom: ${({ theme }) => theme.margins.gigantic}px;
`
export const InfoBlock = styled.div`
  position: absolute;
  left: 40px;
  bottom: 20%;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SignUpWrapper = styled.div`
  position: relative;

  padding: 0 ${({ theme }) => theme.paddings.massive}px;
  margin-bottom: ${({ theme }) => theme.margins.xxl}px;
`
