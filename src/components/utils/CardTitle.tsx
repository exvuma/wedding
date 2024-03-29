import styled from '@emotion/styled'
import { fontFamily, colors, fontSizes, space, newColors } from '../../theme'

export const CardTitle = styled.h3`
  font-family: ${fontFamily.sansserif};
  font-size: 0.8em;
  letter-spacing: 2.2px;
  text-transform: uppercase;
  color: ${colors.gray[3]};
  font-size: ${fontSizes[2]}em;
  margin: ${space[1]}em 0 0 0;
  transition: all 0.2s linear;
`
