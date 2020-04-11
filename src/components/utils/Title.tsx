import styled from '@emotion/styled'
import { colors, breakpoints } from '../../theme'

export const Title = styled<'h2', { color?: string }>('h2')`
  text-align: center;
  padding-top: 1em;
  font-size: 3em;
  color: ${({ color }) => color || colors.red[4]};
  &:before,
  &:after {
    content: '';
    display: inline-block;
    border-top: 2px solid ${colors.red[4]};
    vertical-align: middle;
    width: 60px;
    margin: 0 0.5em;
  }

  @media screen and (max-width: ${breakpoints.mobile}em) {
    font-size: 2.5em;

    &:before,
    &:after {
      content: '';
      width: 40px;
      margin: 0 0.5em;
    }
  }
`
export const Subtitle = styled<'h2', { color?: string }>('h2')`
  text-align: center;
  /* padding-top: 1em;
  font-size: 3em; */
  /* color: ${({ color }) => color || colors.red[2]}; */
`
// const TitleHeader =  styled<'h2', { color?: string }>('h2')`
// #faqs > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) {
//   + list-style: none;
//   + padding: 0;
//   + margin: 0;
//   }
