export const newColors = {
  Primary: '#cb1b21', // "Thunderbird",
  Info: ' #151e1a', //	 "RacingGreen",
  Success: '#728342', // "Dingley",
  Warning: '#ef720a', // "Christine",
  LightRed: '#fff7fa',
  Danger: '#f44336', // "Pomegranate",
  // main
  LightShades: '#F4F0ED', // off white
  LightAccent: '#9ACABD', // rose goldish
  MainColor: '#B70315', // red hsla(354, 97%, 36%, 1);
  DarkAccent: '#B58C83', //blue green
  DarkShades: '#262430', //dark purple
  VeryDarkShade: '#000000', //blach
  White: '#ffffff',
  Grey: '#cdccd6',
} as const
export const HSLnewColors = {
  MainColor: [354, 97, 36], // red
  DarkAccent: '#B58C83', //blue green
  DarkShades: '#262430', //dark purple
  VeryDarkShade: '#000000', //blach
  White: '#ffffff',
  Grey: '#cdccd6',
} as const

const deltas = [
  // { l: 97, sx: 50 },
  { l: 91, sx: 20 },
  { l: 82, sx: 23 },
  // { l: 70, sx: 12 },
  { l: 58, sx: 4 },
  // { l: 49, sx: -5 },
  { l: 40, sx: 4 },
  // { l: 33, sx: 8 },
  { l: 25, sx: 22 },
]
export const colors = {
  rose: deltas.map(delta => `hsl(${11},${25 + delta.sx}%, ${delta.l}%)`),
  red: deltas.map(delta => `hsl(${0},${70 + delta.sx}%, ${delta.l}%)`),
  gray: deltas.map(delta => `hsl(${0},${0}%, ${delta.l}%)`),
  purple: deltas.map(delta => `hsl(${246},${14 + delta.sx}%, ${delta.l}%)`),
  aqua: deltas.map(delta => `hsl(${161},${31 + delta.sx}%, ${delta.l}%)`),
} as const

// const showHex = () => {
//   const allColors = Object.keys(colors)
//     .map(key => colors[key].map(color => color))
//     .reduce((prev, cur) => [...prev, ...cur], [])
//     .map(color => {
//       return { color }
//     })
//   console.log('allColors', allColors)
// }
// showHex()

export type ThemeColor =
  | typeof colors.rose[number]
  | typeof colors.red[number]
  | typeof colors.gray[number]
  | typeof colors.purple[number]
  | typeof colors.aqua[number]

export const breakpoints = {
  mobile: 40,
}

export const fontFamily = {
  sansserif:
    '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif',
  // serif: "'Cormorant SC', serif",
  serif: "'Playfair Display'",
  script: "'Calligraffitti', cursive",
}

export const baseFontSize = '20px'
export const mobileBaseFontSize = '15px'
export const thickFont = 600

export const fontSizes = [0, 0.5, 1, 1.5, 2, 2.25, 2.8, 3.2, 5] as const

export const space = [0, 0.5, 1, 1.5, 2, 3, 4, 5, 6] as const
