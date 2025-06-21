import type { FC, ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { CloseIcon } from '@/components/icons'
import { Typography } from '@/components/typography'

import { CloseButton, ModalBlock, ModalOverlay } from './styled'

type Props = {
  onClose?: () => void
  isOpen: boolean
  children: ReactNode
  title?: string
  dataTestId?: string
}

export const Modal: FC<Props> = ({
  isOpen,
  onClose,
  children,
  title,
  dataTestId,
}) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null)

  useEffect(() => {
    let root = document.getElementById('modal-root')
    if (!root) {
      root = document.createElement('div')
      root.id = 'modal-root'
      document.body.appendChild(root)
    }
    setModalRoot(root)
  }, [])

  if (!isOpen || !modalRoot) return null

  return createPortal(
    <ModalOverlay>
      <ModalBlock data-testid={dataTestId}>
        <Typography size="xxl" marginBt="s">
          {title}
        </Typography>
        <CloseButton
          type="button"
          className="close-button"
          onClick={onClose}
          data-testid={`${dataTestId}-close-button`}
        >
          <CloseIcon />
        </CloseButton>
        {children}
      </ModalBlock>
    </ModalOverlay>,
    modalRoot
  )
}
