import { ContainerSmall } from '../Container'
import styled from '@emotion/styled'
import { CSSProperties } from 'react'
import { colors } from '../../theme/theme'
import { Title } from '../utils/Title'

const itineraryItems = [
  { description: 'Rehearsal Dinner', date: 'November 19th, 2020' },
  { description: 'Ceremony', date: 'November 20th, 2020', time: '3pm' },
  { description: 'Reception', date: 'November 20th, 2020', time: '6pm' },
  {
    description: 'Group Event',
    time: 'TBD but expect',
    date: 'November 21th, 2020',
  },
] as const
export const Itinerary: React.FC = () => (
  <ContainerSmall>
    <Title>Itinerary</Title>
    <div style={{ marginBottom: '1em' }}>
      <p>More details coming soon! All you need to know now is:</p>
      <div>
        <Table>
          <tbody>
            {itineraryItems.map(item => (
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
  </ContainerSmall>
)
export const Tr = styled('tr')``
export const Td = styled<'td', {}>('td')`
  line-height: 1.42857143;
  vertical-align: top;
  border-top: 1px solid #ddd;
  padding: 1em 0;
`

export const Table = styled<
  'table',
  {
    columns: number
    padding?: CSSProperties['padding']
    margin?: CSSProperties['margin']
  }
>('table')`
  position: relative;
  width: 100%;
  & ${Td} :first-child {
    text-align: left;
  }
  & ${Td} :last-child {
    text-align: right;
    color: ${colors.red[2]};
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
