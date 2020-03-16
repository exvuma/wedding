import React from 'react'
import { Container } from '../components/Container'
import { colors, ThemeColor } from '../theme'

const ColorPage: React.FC = () => {
  return (
    <Container>
      <ColorGrid />
    </Container>
  )
}

const ColorGrid: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <ColorGridCol color="red" />
      <ColorGridCol color="aqua" />
      <ColorGridCol color="rose" />
      <ColorGridCol color="purple" />
      <ColorGridCol color="gray" />
    </div>
  )
}

const ColorGridCol: React.FC<{ color: keyof typeof colors }> = props => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {colors[props.color].map((color, index) => (
        <ColorBox color={props.color} index={index} />
      ))}
    </div>
  )
}

const ColorBox: React.FC<{
  index: number
  color: keyof typeof colors
}> = props => (
  <div
    style={{
      width: '6em',
      height: '3em',
      padding: '1em',
      margin: '0.2em',
      background: colors[props.color][props.index],
      color: props.index > 1 ? colors[props.color][0] : colors[props.color][4],
    }}
  >
    {colors[props.color][props.index]}
  </div>
)

export default ColorPage
