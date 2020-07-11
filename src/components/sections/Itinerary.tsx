import { Container } from '../utils/Container'
import styled from '@emotion/styled'
import { colors, breakpoints } from '../../theme/theme'
import { Title } from '../utils/Title'
import { CardSection } from '../utils/CardSection'

const itineraryItems = [
  { description: 'A special event (ask V or John for details)', date: 'November 18th, 2020', time: null },
  { description: 'Rehearsal Dinner', date: 'November 19th, 2020', time: null },
  { description: 'Ceremony', date: 'November 20th, 2020', time: '3pm' },
  { description: 'Reception', date: 'November 20th, 2020', time: '6pm' },
  {
    description: 'Group Event',
    time: 'TBD',
    date: 'November 21th, 2020',
  },
] as const
export const Itinerary: React.FC = () => (
  <Container>
    <Title>Itinerary</Title>
    <CardSection>
      <div style={{ marginBottom: '1em' }}>
        <p>More details coming soon! All you need to know now is:</p>
        <br />
        <div>
          <Table>
            <tbody>
              {itineraryItems.map((item) => (
                <Tr>
                  <Td>{item.description}:</Td>
                  <Td>{item.time ? item.time : ''}</Td>
                  <Td>{item.date}</Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
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
