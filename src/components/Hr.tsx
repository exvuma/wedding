import styled from '@emotion/styled'
import { space, colors } from '../theme'

export const SmallHr = styled<'hr', { color?: string }>('hr')`
  display: block;
  width: ${space[6]}em;
  height: ${space[1]}em;
  margin: ${space[2]}em 0;
  background: ${({ color }) => color || colors.gray[1]};
`
