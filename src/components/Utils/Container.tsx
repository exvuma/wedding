import React from 'react'
import { Box } from 'reflexbox'
import styled from '@emotion/styled'
import { space, fontFamily, colors, newColors } from '../../theme'

export const Container: React.FC = ({ children }) => (
  <Box maxWidth={1180} mx="auto" p={[space[2] + 'em', 0]}>
    {children}
  </Box>
)

export const ContainerSmall: React.FC = ({ children }) => (
  <Box maxWidth={660} mx="auto" p={[space[2] + 'em', 0]}>
    {children}
  </Box>
)
