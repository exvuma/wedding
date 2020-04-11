import styled from '@emotion/styled'
import { colors, newColors } from '../theme'

export const ColoredBlade = styled<
  'div',
  {
    base: keyof typeof colors
    index: 0 | 1 | 2 | 3 | 4 //| 5 | 6 | 7 //colors
    customBg?: string
    theme?: any
  }
>('div')(props => ({
  position: 'relative',
  background: colors[props.base][props.index],
  backgroundImage: props.customBg,
  color: getForegroundColor(props.base, props.index),
  // Let consumer handle these things
  // padding: space[6] + 'em',
  // textAlign: 'center',
}))

function getForegroundColor(
  base: keyof typeof colors,
  index: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7,
) {
  if (base === 'gray') {
    if (index < 2) {
      return newColors.DarkShades
    } else {
      return newColors.LightShades
    }
  }

  if (index < 2) return newColors.DarkShades

  return newColors.LightShades
}
