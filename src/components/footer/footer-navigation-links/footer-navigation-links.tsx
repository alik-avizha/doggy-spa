import type { ElementType, FC } from 'react'
import { useTranslation } from 'react-i18next'

import { NavigationItem } from '../styled'

type Props = {
  links: { labelKey: string; href: string }[]
  renderAs?: ElementType
}

export const FooterNavigationLinks: FC<Props> = ({
  links,
  renderAs: Component = NavigationItem,
}) => {
  const { t } = useTranslation()

  return (
    <>
      {links.map(({ labelKey, href }) => (
        <Component
          key={labelKey}
          href={href}
          data-testid={`footer-link-${labelKey}`}
        >
          {t(labelKey)}
        </Component>
      ))}
    </>
  )
}
