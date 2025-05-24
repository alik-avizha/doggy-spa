import { css } from '@emotion/css'

export const defaultLink = (isActive: boolean) => css`
  color: #4c4c4b;
  text-decoration: none;
  font-family: Cormorant, sans-serif;
  font-weight: 700;
  font-size: 26px;

  ${isActive &&
  css`
    position: relative;
    display: inline-block;
    padding-bottom: 10px;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 6px;
      border-radius: 4px;
      background-color: #e89b93;
      transition: transform 0.3s ease;
    }
  `}
`
