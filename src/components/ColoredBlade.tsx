import styled from '@emotion/styled'
import { colors } from '../theme'

export const ColoredBlade = styled<
  'div',
  {
    base: keyof typeof colors
    index: 1 | 2 | 3 | 4 | 5 | 6 | 7
    customBg?: string
  }
>('div')(props => ({
  position: 'relative',
  background: colors[props.base][props.index],
  backgroundImage: props.customBg,
  color: props.index < 3 ? colors[props.base][7] : colors[props.base][0],
  // Let consumer handle these things
  // padding: space[6] + 'em',
  // textAlign: 'center',
}))
