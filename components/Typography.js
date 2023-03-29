import styled from "styled-components/native"

const StyledText = styled.Text(({
  $color,
  $font,
  $fontSize,
  $fontSpacing,
  $textAlign,
  theme: { colors, fonts, fontSize, fontSpacing }
}) => ({
  color: colors[$color],
  fontFamily: fonts[$font],
  fontSize: fontSize[$fontSize],
  letterSpacing: fontSpacing[$fontSpacing],
  textAlign:  $textAlign,
}))

const Typography = ({
  color = "primary",
  font = "primary",
  fontSize = "regular",
  fontSpacing = "regular",
  textAlign = "default",
  children,
  ...props
}) => {
  return (
    <StyledText 
      $color={color}
      $font={font}
      $fontSize={fontSize}
      $fontSpacing={fontSpacing}
      $textAlign={textAlign}
      {...props}
    >
      {children}
    </StyledText>
  )
}

export default Typography