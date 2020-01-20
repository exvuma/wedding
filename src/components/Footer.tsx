import { ColoredBlade } from "./ColoredBlade"

import { Box } from "reflexbox"

import { space, colors } from "../theme"
import floralUrl from "../img/white_rose.png"
export const Footer = () => {
  return (<ColoredBlade base="green" index={1}>
    <div style={{ zIndex: 2, position: 'relative' }}>
      <Box p={space[7] + 'em'} textAlign="center" >
        <img src={floralUrl} style={{ width: "10%" }} />
        <h2 style={{ color: colors.gold[6] }}>More details Coming Soon</h2>
      </Box>
    </div>
  </ColoredBlade>)
}