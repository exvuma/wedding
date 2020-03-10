import styled from '@emotion/styled'
import { space, colors, newColors } from '../../theme'

export const Title = styled<'h2', { color?: string }>('h2')`
  text-align: center;
  padding-top: 1em;
  font-size: 3em;
  color: ${({ color }) => color || newColors.LightShades};
`
