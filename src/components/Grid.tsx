import styled from '@emotion/styled'

export const Grid = styled<'div', { columns: number }>('div')`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
`

export const GridItem = styled('div')`
  padding: 0 1.5vw;
  margin: 0 0 6vh;
`

// .grid__item:nth-child(odd) .product {
// 	margin-top: -8em;
// }
