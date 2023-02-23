import { Image } from "react-native";
import styled from "styled-components/native";


const shadow = {
  shadowOpacity: 0.2,
  elevation: 1,
  shadowRadius: 4 ,
  shadowOffset : { width: 1, height: 2 },
}

const ButtonContainer = styled.TouchableOpacity(
  ({ theme: { colors }, $variant, $withShadow }) => ({
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 10,
    background: colors.primary,
    flexDirection:  'row',
    justifyContent: 'center',
    borderRadius: 5,
    ...($variant === "rounded" && {
      borderRadius: 20,
    }),
    ...($variant === "light" && {
      background: "transparent",
      paddingHorizontal: 0,
      paddingVertical: 0,
      position: 'relative',
      overflow: 'hidden'
    }),
    ...($variant === "white" && {
      background: colors.white,
    }),
    ...($variant === 'white' && $withShadow && {
      shadowColor: colors.opaqueDark,
      ...shadow
    }),
    ...($variant === 'default' && $withShadow && {
      shadowColor: colors.primary,
      ...shadow
    })
  })
);

const ButtonText = styled.Text(({ theme: { colors, fonts, fontSize }, $variant, $fontSize }) => ({
  color: colors.white,
  fontFamily: fonts.primary,
  fontSize: fontSize[$fontSize],
  ...($variant === "light" && {
    color: colors.primary,
  }),
  ...($variant === "white" && {
    color: colors.opaqueDark
  }),
}));

const StyledImage = styled.Image(({ isLeft, $fontSize }) => ({
  marginRight: isLeft ? 10 : 0,
  marginLeft: !isLeft ? 10 : 0,
  ...['extraSmall', 'small', 'regular'].includes($fontSize) && {
    height: 25,
    width: 25
  },
  ...['semiLarge', 'large', 'larger', 'xl'].includes($fontSize) && {
    height: 30,
    width: 30,
  }
}))

const LightBorder = styled.View(({ theme: { colors }}) => ({
  position: 'absolute',
  height: 2,
  width: '90%',
  bottom: 0,
  background: colors.primary
}))

const Button = ({
  children,
  variant = "default",
  onPress,
  hideBorder = false,
  fontSize = "regular",
  withShadow = false, 
  iconLeft = null,
  iconRight = null
}) => {
  return (
    <ButtonContainer $variant={variant} onPress={onPress} $withShadow={withShadow}>
      {iconLeft && <StyledImage isLeft source={iconLeft} $fontSize={fontSize}  />}
      <ButtonText $variant={variant} $fontSize={fontSize}>
        {children}
      </ButtonText>
      {variant === 'light' && !hideBorder && <LightBorder />}
      {iconRight && <StyledImage source={iconRight} style={{ width: 25, height: 33 }}/>}
    </ButtonContainer>
  );
};

export default Button;