import { Card } from '@/components/card'
import { Gap } from '@/components/gap'
import { TextField } from '@/components/textfield'
import { Typography } from '@/components/typography'

import {
  DescriptionBlock,
  LeftBlock,
  SignBlock,
  StyledButton,
  TitleBlock,
  Wrapper,
} from './styled'

export const SignUp = () => (
  <Wrapper>
    <LeftBlock>
      <TitleBlock>
        <Typography variant="size_30" textTransForm="uppercase">
          Sign Up to Bark Newsletter
        </Typography>
      </TitleBlock>
      <Gap size={40} />
      <Typography variant="size_22">
        Get 10% Off Your First Spa Treatment{' '}
      </Typography>
      <Gap size={40} />
      <SignBlock>
        <TextField placeholder="Email" />
        <Gap size={40} />
        <StyledButton>Sign Up</StyledButton>
        <Gap size={40} />
        <DescriptionBlock>
          <Typography variant="size_14" textAlign="center">
            *By completing this form you are signing up to receive our emails
            and can unsubscribe at any time.
          </Typography>
        </DescriptionBlock>
      </SignBlock>
    </LeftBlock>
    <Card width={466} height={430} url="/images/doggy.webp" />
  </Wrapper>
)
