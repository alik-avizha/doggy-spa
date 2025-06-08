import type { FC, PropsWithChildren } from 'react'

import { DefaultLink } from './styled'

type Props = {
  href: string
  isActive: boolean
}
export const NavigationLink: FC<Props & PropsWithChildren> = ({
  href,
  isActive,
  children,
}) => (
  <DefaultLink href={href} isActive={isActive}>
    {children}
  </DefaultLink>
)
