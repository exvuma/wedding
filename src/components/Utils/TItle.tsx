import styled from '@emotion/styled'
import { space, colors, newColors } from '../../theme'

export const Title = styled<'h2', { color?: string }>('h2')`
  text-align: center;
  padding-top: 1em;
  font-size: 3em;
  color: ${({ color }) => color || 'initial'};
  &:before,
  &:after {
    content: '';
    display: inline-block;
    border-top: 3px solid ${colors.gray[3]};
    vertical-align: middle;
    width: 60px;
    margin: 0 0.5em;
  }
`
// const TitleHeader =  styled<'h2', { color?: string }>('h2')`
// #faqs > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) {
//   + list-style: none;
//   + padding: 0;
//   + margin: 0;
//   }
