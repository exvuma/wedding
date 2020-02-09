import React from 'react'
import { Box } from 'reflexbox'
import { space, fontSizes } from '../theme'

export const FormSection: React.FC = () => {
  return (
    <Box textAlign="center" fontSize={fontSizes[3] + 'em'} py={space[5] + 'em'}>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScNTtPxdosf-pkdo7VparHbKWMCrom15jqQuSVYPTeozbTP2g/viewform?usp=sf_link">
        Let us know if you can make it
      </a>
    </Box>
  )
}
