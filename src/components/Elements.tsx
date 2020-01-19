// import { css } from '@emotion/core'
// import styled from '@emotion/styled'
// import * as theme from '../theme'

// type Space = typeof theme.space[number]

// type LayoutCSSProps = Pick<
//   React.CSSProperties,
//   | 'margin'
//   | 'marginTop'
//   | 'marginRight'
//   | 'marginBottom'
//   | 'marginLeft'
//   | 'padding'
//   | 'paddingTop'
//   | 'paddingRight'
//   | 'paddingBottom'
//   | 'paddingLeft'
// >

// type ThemedCSSProps = {
//   [K in keyof LayoutCSSProps]: Space | [Space, Space]
// }

// const layoutCSSProps: { [K in keyof LayoutCSSProps]: 0 } = {
//   'margin': 0,
//   'marginTop': 0,
//   'marginRight': 0,
//   'marginBottom': 0,
//   'marginLeft': 0,
//   'padding': 0,
//   'paddingTop': 0,
//   'paddingRight': 0,
//   'paddingBottom': 0,
//   'paddingLeft': 0,
// }

// // function applyLayoutProps(props: Partial<ThemedCSSProps>) {
// //   return css()
// // }

// type CSSWithArray = {
//   [K in keyof React.CSSProperties]: React.CSSProperties[K] | [React.CSSProperties[K], React.CSSProperties[K]]
// } & ThemedCSSProps

// function applyStyles(props: Partial<CSSWithArray>) {
//   if (!props) return

//   const newProps = {} as any
//   let key: keyof CSSWithArray
//   for (key in props) {
//     let value = props[key]
//     if (key in layoutCSSProps && typeof value === 'number') {
//       value = theme.space[value]
//     }
//   }

//   return newProps
// }

// export const Div = styled<'div', CSSWithArray>('div')(applyStyles)
