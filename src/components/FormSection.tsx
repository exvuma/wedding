import React from 'react'
import { Box } from 'reflexbox'
import { space, breakpoints, fontSizes } from '../theme'
import styled from '@emotion/styled'

export const FormSection: React.FC = () => {
  return (
    <FormSectionWrapper>
      <div data-mobile>
        <Box textAlign="center" fontSize={fontSizes[3] + 'em'}>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScNTtPxdosf-pkdo7VparHbKWMCrom15jqQuSVYPTeozbTP2g/viewform?usp=sf_link">
            Let us know if you can make it
          </a>
        </Box>
      </div>
      <div data-desktop>
        <Box mt={space[5] + 'em'}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScNTtPxdosf-pkdo7VparHbKWMCrom15jqQuSVYPTeozbTP2g/viewform?embedded=true"
            width="100%"
            style={{ height: '1350px' }}
            scrolling="no"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </Box>
      </div>
    </FormSectionWrapper>
  )
}

const FormSectionWrapper = styled.div`
  [data-desktop] {
    display: none;
  }

  @media screen and (min-width: ${breakpoints.mobile}em) {
    [data-desktop] {
      display: block;
    }

    [data-mobile] {
      display: none;
    }
  }
`
