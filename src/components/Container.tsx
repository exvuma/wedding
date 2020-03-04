import React from 'react'
import { Box } from 'reflexbox'
import { space } from '../theme'
import { Waypoint } from 'react-waypoint'

type ContainerProps = {
  // setState: (id: string) => void
  // unsetState: (id: string) => void
  // id: string
}
export const Container: React.FC = ({ children }) => (
  <Box maxWidth={1180} mx="auto" p={[space[2] + 'em', 0]}>
    {children}
  </Box>
)
export const ContainerSmall: React.FC<ContainerProps> = ({
  children,
  // setState,
}) => {
  const setNavState = (id: string) => {
    console.log('id', id)
  }
  return (
    <Box maxWidth={660} mx="auto" p={[space[2] + 'em', 0]}>
      {/* <Waypoint onEnter={setState} /> */}
      {/* // onLeave={setNavState} /> */}
      {children}
    </Box>
  )
}
