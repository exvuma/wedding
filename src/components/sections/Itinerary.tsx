import { ContainerSmall } from '../Container'
import styled from '@emotion/styled'
import { CSSProperties } from 'react'
import { CardWrapper } from '../utils/CardWrapper'

const itineraryItems = [
  { description: 'Group Event: TBD but', date: 'expect 11/21/2020' },
  { description: 'Rehearsal Dinner:', date: '11/19/2020' },
  { description: 'Ceremony:', date: '11/20/2020 3pm' },
  { description: 'Reception:', date: '11/20/2020 6pm' },
] as const
export const Itinerary: React.FC = () => (
  <ContainerSmall>
    <CardWrapper>
      <h1>Itinerary</h1>
      <div>
        <Table>
          <tbody>
            More details coming soon! All you need to know now is:
            {itineraryItems.map(item => (
              <Tr>
                <Td>{item.description}</Td>
                <Td>{item.date}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </div>
    </CardWrapper>
  </ContainerSmall>
)
export const Tr = styled('tr')``
export const Td = styled<'td', {}>('td')`
  line-height: 1.42857143;
  vertical-align: top;
  border-top: 1px solid #ddd;
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
    text-align: center;
  }
  & ${Td} :last-child {
    text-align: right;
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
