import * as React from 'react'
import { Box } from 'reflexbox'
import { space, colors } from '../../theme'
import { ContainerSmall } from '../utils/Container'
import { SmallHr } from '../Hr'

interface RescheduleUpdateIntroProps {}

export const RescheduleUpdateIntro: React.FC<RescheduleUpdateIntroProps> = () => (
  <div
    style={{
      height: 'calc(max(100vh, 40em))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
    }}
  >
    <Box marginBottom={space[5] + 'em'} paddingY={space[3] + 'em'}>
      <ContainerSmall>
        <h2>Reschedule Update</h2>
        <SmallHr color={colors.rose[3]} />
        <p>
          The new wedding date is October 22nd, 2021! We patiently waited for
          this moment because celebrating safely with you meant so much to us.
        </p>
        <p>
          <a href="#book">Book now</a>!
        </p>
      </ContainerSmall>
    </Box>
  </div>
)
