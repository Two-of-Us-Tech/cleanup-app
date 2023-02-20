import styled from "styled-components/native";

const ButtonContainer = styled.TouchableOpacity(
  ({ theme: { colors }, $variant }) => ({
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    background: colors.primary,
    borderRadius: 5,
    ...($variant === "rounded" && {
      borderRadius: 20,
    }),
    ...($variant === "light" && {
      background: "transparent",
      bottomBorder: "1px solid red",
    }),
  })
);

const ButtonText = styled.Text(({ theme: { colors, fonts }, $variant }) => ({
  color: colors.white,
  fontFamily: fonts.primary,
  fontSize: 18,
  ...($variant === "light" && {
    color: colors.primary,
  }),
}));

const ButtonBorder = styled.View(({ theme: { colors } }) => ({
  width: "100%",
  height: 1,
  background: colors.primary,
}));

const Button = ({ children, variant = "default", onPress }) => {
  return (
    <ButtonContainer $variant={variant} onPress={onPress}>
      <ButtonText $variant={variant}>{children}</ButtonText>
      {variant === "light" && <ButtonBorder />}
    </ButtonContainer>
  );
};

export default Button;
