import { Container } from '../utils/Container'
import styled from '@emotion/styled'
import { colors, breakpoints } from '../../theme/theme'
import { Title } from '../utils/Title'
import { CardSection, CardSectionSubTitle } from '../utils/CardSection'
import { Box } from 'reflexbox'

const itineraryItems = [
  {
    description: 'A special event (ask V or John for details)',
    date: 'October 20th, 2021',
    time: null,
  },
  { description: 'Rehearsal Dinner', date: 'October 21st, 2021', time: null },
  { description: 'Ceremony', date: 'October 22nd, 2021', time: '3pm' },
  { description: 'Reception', date: 'October 22nd, 2021', time: '6pm' },
  {
    description: 'Group Event',
    time: 'TBD',
    date: 'October 23rd, 2021',
  },
] as const
export const Itinerary: React.FC = () => (
  <Container>
    <Title>Itinerary</Title>
    <CardSection>
      <div style={{ marginBottom: '1em' }}>
        <p>
          We understand that folks are flying in on different days.{' '}
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLScNTtPxdosf-pkdo7VparHbKWMCrom15jqQuSVYPTeozbTP2g/viewform?usp=sf_link"
          >
            Let us know
          </a>{' '}
          which events you can make it to.
        </p>
        <Table>
          <tbody>
            {itineraryItems.map((item) => (
              <Tr>
                <Td>{item.description}</Td>
                <Td>{item.time ? item.time : ''}</Td>
                <Td>{item.date}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Box marginY={3}>
        <CardSectionSubTitle>Dates and Deadlines</CardSectionSubTitle>
      </Box>
      <Table>
        <tbody>
          <Tr>
            <Td>Room block booking</Td>
            <Td>August 1st, 2020</Td>
          </Tr>
          <Tr>
            <DescriptiveTd colSpan={2}>
              This is the last date to book for guaranteed pricing and room
              availability. You can still book after this date, but the pricing
              may fluctuate and rooms may sellout.
            </DescriptiveTd>
          </Tr>
          <Tr>
            <Td>Travel protection cancellation</Td>
            <Td>September 1st, 2020</Td>
          </Tr>
          <Tr>
            <DescriptiveTd colSpan={2}>
              This is our <em>go or no-go</em> date. It's basically the last day
              we have to get a full refund. If we had to cancel after this date,
              guests would not get a cash refund, but rather a travel voucher.
            </DescriptiveTd>
          </Tr>
          <Tr>
            <Td>Final call for bookings and payment</Td>
            <Td>September 13th, 2020</Td>
          </Tr>
          <Tr>
            <DescriptiveTd colSpan={2}>
              This is the last day you can book a room with the group. The Hyatt
              expects all attendees to have booked and paid for their rooms by
              this time.
            </DescriptiveTd>
          </Tr>
          <Tr>
            <Td>
              Deadline to <a href="https://forms.gle/QbSNJyRrjPbYnQkn8">RSVP</a>
            </Td>
            <Td>October 9th, 2020</Td>
          </Tr>
          <Tr>
            <DescriptiveTd colSpan={2}>
              Hard deadline to let us know if you are coming to the wedding
              events
            </DescriptiveTd>
          </Tr>
        </tbody>
      </Table>
    </CardSection>
  </Container>
)

export const Tr = styled('tr')``
export const Td = styled<'td', {}>('td')`
  line-height: 1.42857143;
  vertical-align: top;
  border-top: 1px solid #ddd;
  padding: 1em 0;
`

export const DescriptiveTd = styled(Td)`
  text-align: left;
  font-size: 0.8em;
  border-top: none;
  padding-top: 0;
`

export const Table = styled.table`
  position: relative;
  width: 75%;
  margin: auto;

  @media screen and (max-width: ${breakpoints.mobile}em) {
    width: 100%;
  }

  & ${Td} :first-child {
    text-align: left;
  }
  & ${Td} :last-child {
    text-align: right;
    font-weight: 700;
  }
  & ${Tr} {
    text-align: center;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd;
  }
`
// & > ${Tr} {
//   // padding: ${({ padding }) => padding || '0 1.5vw'};
//   // margin: ${({ margin }) => margin || '0 0 6vh'};
// }
