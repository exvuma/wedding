import { ColoredBlade } from './ColoredBlade'

import { Box } from 'reflexbox'

import { space, colors } from '../theme'
import floralUrl from '../img/white_rose.png'
export type NavProps = {
  items: {
    name: string
    active: boolean
  }[]
  //   [id: string]: boolean
}
export const Navbar: React.FC<NavProps> = ({ items }) => {
  return (
    <ColoredBlade base="red" index={1}>
      <div style={{ zIndex: 99, display: 'flex' }}>
        {items.map(item => (
          <Box p={space[7] + 'em'} textAlign="center">
            <h2
              style={
                item.active
                  ? { color: colors.gray[6] }
                  : { color: colors.gray[1] }
              }
            >
              {item.name}
            </h2>
          </Box>
        ))}
      </div>
    </ColoredBlade>
  )
}
