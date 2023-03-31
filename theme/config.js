export const primaryFontName = 'manrope-bold'
export const primaryFontNameBold = 'manrope-extra-bold'
export const secondaryFontName = 'times-new-roman-bold'

const defaultTheme = {
  colors: {
    primary: '#0B437E',
    secondary: '#A9D5FC',
    tertiary: '#C5EDF8',
    green: '#809A52',
    orange: '#FF7252',
    oranged: '#FB6060',
    white: '#fff',
    dark: '#000',
    opaquePrimary: 'rgba(11, 67, 126, 0.5)',
    opaqueDark: 'rgba(0, 0, 0, 0.7)',
    darkTransparent: 'rgba(0, 0, 0, 0.3)',
    tertiaryDark: 'rgba(0, 0, 0, 0.1)',
    inputColor: '#F9F9FF', 
    gray: '#ECECEC',
    barColor: '#F9F9FB',
    disableColor: '#ccc'
  },
  fonts: {
    primary: primaryFontName,
    primaryBold: primaryFontNameBold,
    secondary: secondaryFontName
  },
  fontSize: {
    extraSmall: 14,
    small: 16,
    regular: 18,
    semiLarge: 20,
    large: 22,
    larger: 24,
    xl: 38,
  },
  fontSpacing: {
    regular: 0,
    spaced: 0.25
  }
}

export default defaultTheme;