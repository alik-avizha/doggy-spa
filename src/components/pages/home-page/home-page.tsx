import { AnimalInfoList } from '@/components/animal-info-list'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Gap } from '@/components/gap/gap'
import { SignUp } from '@/components/sign-up'
import { Typography } from '@/components/typography'
import { ANIMAL_LIST } from '@/contstants/constants'

import { InfoBlock, SignUpWrapper, Wrapper } from './styled.css'

export const HomePage = () => (
  <>
    <Wrapper>
      <InfoBlock>
        <Typography
          data-test-id="page-title"
          variant="size_63"
          textAlign="center"
        >
          Book your doggy spa day!
        </Typography>
        <Gap size={50} />
        <Button>Book Appointment</Button>
      </InfoBlock>
    </Wrapper>
    <Gap size={200} />
    <SignUpWrapper>
      <Card width={552} height={552} url="/images/doggy.webp" />
      <SignUp />
    </SignUpWrapper>
    <Gap size={50} />
    <AnimalInfoList
      title="Dog Collars"
      titleButton="See More Dog Collars"
      items={ANIMAL_LIST}
    />
    <Gap size={50} />
    <AnimalInfoList
      title="Dog Collars"
      titleButton="See More Dog Collars"
      items={ANIMAL_LIST}
    />
    <Gap size={50} />
  </>
)
