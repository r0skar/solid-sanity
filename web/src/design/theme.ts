export const baseline = 1.5
export const baseTextSize = 'calc(12px + 0.75vmin)'

export const scaled = (n: number) => {
  return `${0.25 * n * baseline}rem`
}

export const fontFamily = {
  sans: 'sans',
  serif: 'serif'
} as const

export const colors = {
  bg: '#ffffff',
  text: '#111111',
  primary: '#ffaa00'
} as const

export const tracking = {
  narrow: '-0.1em',
  normal: 'normal',
  wide: '0.1em'
} as const

export const breakpoints = {
  xs: 519,
  sm: 719,
  md: 1023,
  lg: 1279,
  xl: 1800
} as const
