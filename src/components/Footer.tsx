import { ColoredBlade } from "./ColoredBlade"

import { Box } from "reflexbox"

import { space } from "../theme"

export const Footer = () => {
  return (<ColoredBlade base="red" index={7}>
    <div style={{ zIndex: 2, position: 'relative' }}>
      <Box p={space[7] + 'em'} textAlign="center" >
        <h2 style={{ color: '#F5DE99' }}>More details Coming Soon</h2>
      </Box>
    </div>
  </ColoredBlade>)
}