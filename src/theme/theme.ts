export const newColors = {
  Primary: '#cb1b21', // "Thunderbird",
  Info: ' #151e1a', //	 "RacingGreen",
  Success: '#728342', // "Dingley",
  Warning: '#ef720a', // "Christine",
  Danger: '#f44336', // "Pomegranate",
  // main
  LightShades: '#F4F0ED', //light green
  LightAccent: '#9ACABD', // goldish
  MainColor: '#B70315',
  DarkAccent: '#B58C83', //grey
  DarkShades: '#262430',
  VeryDarkShade: '#000000',
} as const
export const colors = {
  //TODO: work on colors
  red: [
    newColors.LightShades,
    newColors.LightAccent,
    newColors.LightAccent,
    newColors.Danger,
    newColors.MainColor,
    newColors.MainColor, //'#b70315', // More important shade of red
    newColors.DarkAccent,
    newColors.DarkAccent,
  ],
  blue: [
    newColors.LightShades,
    newColors.LightShades,
    newColors.DarkAccent,
    newColors.DarkAccent,
    newColors.DarkAccent,
    newColors.DarkAccent,
    newColors.DarkAccent,
    newColors.DarkAccent,
  ],
  green: [
    newColors.LightShades,
    newColors.LightShades,
    newColors.Success,
    newColors.Success,
    newColors.DarkShades,
    newColors.DarkShades,
    newColors.DarkShades,
  ],
  gray: [
    newColors.LightShades,
    newColors.LightShades,
    newColors.DarkAccent,
    newColors.DarkAccent,
    newColors.DarkAccent,
    newColors.DarkAccent,
    newColors.DarkAccent,
    newColors.Info,
  ],
  gold: [
    newColors.LightShades,
    newColors.LightShades,
    newColors.LightAccent,
    newColors.LightAccent,
    newColors.LightAccent,
    newColors.LightAccent,
    newColors.LightAccent,
    newColors.LightAccent,
  ],
} as const
// const color = Object.keys(oldColors).map(mainColor=>{
//   oldColors[mainColor].map
// }

export type ThemeColor =
  | typeof colors.red[number]
  | typeof colors.blue[number]
  | typeof colors.green[number]
  | typeof colors.gray[number]
  | typeof colors.gold[number]

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

export const fontSizes = [0, 0.5, 1, 1.5, 2, 2.25, 2.8, 3.2, 5] as const

export const space = [0, 0.5, 1, 1.5, 2, 3, 4, 5, 6] as const
