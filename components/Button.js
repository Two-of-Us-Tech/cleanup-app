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
    borderRadius: 5,
    ...($variant === "rounded" && {
      borderRadius: 20,
    }),
    ...($variant === "light" && {
      background: "transparent"
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

const ButtonBorder = styled.View(({ theme: { colors } }) => ({
  width: '100%',
  height: 1,
  background: colors.primary,
}));

const Button = ({
  children,
  variant = "default",
  onPress,
  hideBorder = false,
  fontSize = "regular",
  withShadow = false
}) => {
  return (
    <ButtonContainer $variant={variant} onPress={onPress} $withShadow={withShadow}>
      <ButtonText $variant={variant} $fontSize={fontSize}>{children}</ButtonText>
      {variant === "light" && !hideBorder && <ButtonBorder />}
    </ButtonContainer>
  );
};

export default Button;
