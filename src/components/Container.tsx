import React from 'react'
import { Box } from 'reflexbox'

export const Container: React.FC = ({ children }) => (
  <Box maxWidth={1180} mx="auto">
    {children}
  </Box>
)

export const ContainerSmall: React.FC = ({ children }) => (
  <Box maxWidth={660} mx="auto">
    {children}
  </Box>
)
