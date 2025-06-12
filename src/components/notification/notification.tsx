import type { FC } from 'react'
import { useEffect, useState } from 'react'

import { NotificationContainer } from './styled'

type NotificationType = 'success' | 'error'
interface NotificationProps {
  message: string
  type: NotificationType
  onClose?: () => void
}

const backgroundColors: Record<NotificationType, string> = {
  success: '#4caf50',
  error: '#f44336',
}
export const Notification: FC<NotificationProps> = ({
  message,
  type = 'success',
  onClose,
}) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      if (onClose) onClose()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <NotificationContainer
      visible={visible}
      background={backgroundColors[type]}
    >
      {message}
    </NotificationContainer>
  )
}
