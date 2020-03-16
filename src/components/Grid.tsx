import styled from '@emotion/styled'
import { CSSProperties } from 'react'
import { breakpoints } from '../theme'

export const GridItem = styled('div')``

export const Grid = styled<
  'div',
  {
    columns: [number, number]
    padding?: CSSProperties['padding']
    margin?: CSSProperties['margin']
  }
>('div')`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${props => props.columns[0]}, 1fr);

  @media screen and (min-width: ${breakpoints.mobile}em) {
    grid-template-columns: repeat(${props => props.columns[1]}, 1fr);
  }

  & > ${GridItem} {
    padding: ${({ padding }) => padding || '0 1.5vw'};
    margin: ${({ margin }) => margin || '0 0 6vh'};
  }
`

// .grid__item:nth-child(odd) .product {
// 	margin-top: -8em;
// }
