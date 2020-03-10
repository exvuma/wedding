export const newColors = {
  Primary: '#cb1b21', // "Thunderbird",
  Info: ' #151e1a', //	 "RacingGreen",
  Success: '#728342', // "Dingley",
  Warning: '#ef720a', // "Christine",
  LightRed: '#ff959f',
  Danger: '#f44336', // "Pomegranate",
  // main
  LightShades: '#F4F0ED', //light green
  LightAccent: '#9ACABD', // goldish
  MainColor: '#B70315',
  DarkAccent: '#B58C83', //grey
  DarkShades: '#262430',
  VeryDarkShade: '#000000',
  Grey: '#cdccd6',
} as const
function ColorLuminance(hex: string, lum: any) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '')
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  lum = lum || 0

  // convert to decimal and change luminosity
  var rgb = '#',
    part,
    i
  for (i = 0; i < 3; i++) {
    part = parseInt(hex.substr(i * 2, 2), 16)
    part = Math.round(Math.min(Math.max(0, part + part * lum), 255)).toString(
      16,
    )
    rgb += ('00' + part).substr(part.length)
  }

  return rgb
}
console.log(
  '    ColorLuminance(newColors.MainColor, 0.99),',
  ColorLuminance(newColors.MainColor, 0.99),
)

export const colors = {
  //TODO: work on colors
  red: [
    ColorLuminance(newColors.LightRed, 1),
    ColorLuminance(newColors.LightRed, 0.9),
    ColorLuminance(newColors.MainColor, 0.3),
    ColorLuminance(newColors.MainColor, 0),
    ColorLuminance(newColors.MainColor, -0.2),
    ColorLuminance(newColors.MainColor, -0.4),
    ColorLuminance(newColors.MainColor, -0.8),
  ],
  blue: [
    ColorLuminance(newColors.DarkShades, 0.8),
    ColorLuminance(newColors.DarkShades, 0.7),
    ColorLuminance(newColors.DarkShades, 0.3),
    ColorLuminance(newColors.DarkShades, 0),
    ColorLuminance(newColors.DarkShades, -0.2),
    ColorLuminance(newColors.DarkShades, -0.4),
    ColorLuminance(newColors.DarkShades, -0.8),
  ],
  green: [
    ColorLuminance(newColors.DarkAccent, 0.8),
    ColorLuminance(newColors.DarkAccent, 0.7),
    ColorLuminance(newColors.DarkAccent, 0.3),
    ColorLuminance(newColors.DarkAccent, 0),
    ColorLuminance(newColors.DarkAccent, -0.2),
    ColorLuminance(newColors.DarkAccent, -0.4),
    ColorLuminance(newColors.DarkAccent, -0.8),
  ],
  gray: [
    ColorLuminance(newColors.Grey, 0.8),
    ColorLuminance(newColors.Grey, 0.7),
    ColorLuminance(newColors.Grey, 0.3),
    ColorLuminance(newColors.Grey, 0),
    ColorLuminance(newColors.Grey, -0.2),
    ColorLuminance(newColors.Grey, -0.4),
    ColorLuminance(newColors.Grey, -0.8),
  ],
  gold: [
    ColorLuminance(newColors.LightAccent, 0.8),
    ColorLuminance(newColors.LightAccent, 0.7),
    ColorLuminance(newColors.LightAccent, 0.3),
    ColorLuminance(newColors.LightAccent, 0),
    ColorLuminance(newColors.LightAccent, -0.2),
    ColorLuminance(newColors.LightAccent, -0.4),
    ColorLuminance(newColors.LightAccent, -0.8),
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
