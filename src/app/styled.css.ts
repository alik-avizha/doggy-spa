import styled from '@emotion/styled'

export const Wrapper = styled.div`
  height: 768px;
  background-image: url('/images/doggy.webp');
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  position: relative;
`

export const InfoBlock = styled.div`
  position: absolute;
  left: 40px;
  bottom: 20%;
  width: 499px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Text = styled.p`
  font-family: Cormorant sans-serif;
  font-weight: 700;
  font-size: 63px;
  line-height: 76.29px;
  letter-spacing: 0;
  text-align: center;
  color: #4c4c4b;
  margin-bottom: 50px;
`
