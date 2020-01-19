import styled from '@emotion/styled'
import { fontFamily, fontSizes, space, colors } from '../theme'

export const DetailsList = styled.dl`
  font-family: ${fontFamily.serif};
  font-size: ${fontSizes[3]}em;
  margin: 0;
  padding: 0;
`

export const DetailsRow = styled.div`
  padding: ${space[1]}em;
  border-bottom: dotted 1px ${colors.gray[3]};
  display: flex;
`

export const DetailsRowDt = styled.dt`
  color: ${colors.gray[7]};
  width: ${space[8]}em;
  text-align: left;
`

export const DetailsRowDd = styled.dd`
  flex: 1;
  text-align: right;
`
