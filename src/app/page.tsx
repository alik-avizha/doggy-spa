'use client'

import { InfoBlock, Text, Wrapper } from '@/app/styled.css'
import { Button } from '@/components/button'
import { Card } from '@/components/card'

function Home() {
  return (
    <div>
      <Wrapper>
        <InfoBlock>
          <Text data-test-id="page-title">Book your doggy spa day!</Text>
          <Button>Book Appointment</Button>
        </InfoBlock>
      </Wrapper>
      <Card width={552} height={552} url="/images/doggy.webp" />
    </div>
  )
}
export default Home
