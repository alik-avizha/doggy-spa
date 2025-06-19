import styled from '@emotion/styled'

export const Wrapper = styled.div`
  height: 768px;
  background-image: url('/images/doggy.webp');
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  position: relative;

  margin-bottom: ${({ theme }) => theme.margins.gigantic}px;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    margin-bottom: ${({ theme }) => theme.margins.l}px;
  }
`
export const InfoBlock = styled.div`
  position: absolute;
  left: 40px;
  bottom: 20%;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.dimensions.mobile}px) {
    width: 300px;
    left: 20px;
    bottom: 10%;
  }
`
export const SignUpWrapper = styled.div`
  position: relative;

  padding: 0 ${({ theme }) => theme.paddings.massive}px;
  margin-bottom: ${({ theme }) => theme.margins.xxl}px;

  @media (max-width: ${({ theme }) => theme.dimensions.desktop}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.gap.l}px;
    padding: 0 ${({ theme }) => theme.paddings.m}px;
  }
`
