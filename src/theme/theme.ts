export const colors = {
  //TODO: work on colors
  red: [
    '#fff8fa', // TODO: remove these heinous pinks
    '#fcc9d8',
    '#f99bb7',
    '#ec4b78',
    '#d51647',
    '#b70315', // More important shade of red
    '#800017',
    '#47000a',
  ],
  blue: [
    '#fcfeff', //TODO: remove these even more heinous blues
    '#e1f0fc',
    '#c6e3f9',
    '#95c4ec',
    '#6ea1d5',
    '#4e79b2',
    '#334d80',
    '#1b2647',
  ],
  green: [
    '#b2c4b8',
    '#a2c2ac',
    '#93bfa1',
    '#74b389',
    '#5a9e72',
    '#407d58',
    '#275038',
    '#0d1c14',
  ],
  gray: [
    '#fafafa',
    '#f6f6f6',
    '#f2f2f2',
    '#e2e2e2',
    '#c6c6c6',
    '#9a9a9a',
    '#5d5d5d',
    '#171717',
  ],
  gold: [
    '#faf4e3',
    '#f7e7bd',
    '#f3db98',
    '#e5bf56',
    '#cca129',
    '#a67e0e',
    '#715302',
    '#332500',
  ],
} as const

export type ThemeColor =
  | typeof colors.red[number]
  | typeof colors.blue[number]
  | typeof colors.green[number]
  | typeof colors.gray[number]
  | typeof colors.gold[number]

export const breakpoints = {
  mobile: 20,
}

export const fontFamily = {
  sansserif: 'sans-serif',
  serif: "'Cormorant SC', serif",
  script: "'Calligraffitti', cursive",
}

export const baseFontSize = '15px'

export const fontSizes = [0, 0.5, 1, 1.5, 2, 2.25, 2.8, 3.2, 5] as const

export const space = [0, 0.5, 1, 1.5, 2, 3, 4, 5, 6] as const
