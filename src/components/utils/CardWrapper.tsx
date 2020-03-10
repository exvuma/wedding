import styled from '@emotion/styled'
import { space, fontFamily, colors } from '../../theme'
import { CardTitle } from './CardTitle'

export const CardWrapper = styled.div`
  background: white;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000001' fill-opacity='0.05' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  border-radius: 3px;
  padding: ${space[2]}em;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-family: ${fontFamily.sansserif};
  cursor: pointer;
  transform: scale(1);
  transition: all 0.2s ease-out;
  border-top: solid 8px ${colors.red[5]};
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    & ${CardTitle} {
      color: ${colors.red[4]};
    }
  }
`
