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
          After much thought, we are pushing the wedding to{' '}
          <strong>October 22nd, 2021</strong>. We have family from all the
          hotspots in the country and the virus clearly isn’t going away. Health
          is one of the most important gifts God gives us and the worst way to
          start our lives together would be by exposing our family’s health and
          well-being to this heinous virus. Also V admittedly couldn’t resist
          hugging, kissing and dancing with loved ones mask free on her wedding
          day. We are willing to wait for all that and October 2021 was the best
          time.
        </p>

        <p>
          If you already booked,{' '}
          <a href="#faq-What-if-I-already-booked">click here</a>. If you need to
          book, <a href="#book">click here</a>.
        </p>

        <p>
          We appreciate your understanding,
          <br />
          <em>-J&amp;V</em>
        </p>
      </ContainerSmall>
    </Box>
  </div>
)
