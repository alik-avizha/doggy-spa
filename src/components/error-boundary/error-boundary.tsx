'use client'

import type { ReactNode } from 'react'
import { Component } from 'react'

import { Button } from '@/components/button'

import { InfoBlock, Wrapper } from './styled'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Caught error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Wrapper>
          <InfoBlock>
            <Button
              onClick={() => this.setState({ hasError: false })}
              type="button"
            >
              Try again
            </Button>
          </InfoBlock>
        </Wrapper>
      )
    }

    return this.props.children
  }
}
