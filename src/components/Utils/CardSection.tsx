import styled from '@emotion/styled'
import { space, fontFamily, colors, newColors } from '../../theme'
import { CardTitle } from './CardTitle'

/**
 * Content cards to be used for Book, FAQs, etc..
 */
export const CardSection = styled.div`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000001' fill-opacity='0.05' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  border-radius: 3px;
  padding: ${space[1]}em ${space[4]}em;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  max-width: 990px;
  margin: auto;
`
