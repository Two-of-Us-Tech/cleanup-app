export const primaryFontName = 'times-new-roman-regular'
export const primaryFontNameBold = 'times-new-roman-bold'
export const secondaryFontName = 'manrope-regular'
export const secondaryFontNameBold = 'manrope-bold'

const defaultTheme = {
  colors: {
    primary: '#0B437E',
    opaquePrimary: 'rgba(11, 67, 126, 0.5)',
    secondary: '#A9D5FC',
    tertiary: '#C5EDF8',
    green: '#809A52',
    orange: '#FF7252',
    oranged: '#FB6060',
    white: '#fff',
    dark: '#000',
    lightGray: '#BEBEBE'
  },
  fonts: {
    primary: primaryFontName,
    primaryBold: primaryFontNameBold,
    secondary: secondaryFontName,
    secondaryBold: secondaryFontNameBold
  },
  fontSize: {
    extraSmall: 14,
    small: 16,
    regular: 18,
    semiLarge: 20,
    large: 22,
    larger: 24,
    xl: 38,
  }
}

export default defaultTheme;