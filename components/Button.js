import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { Platform } from "react-native";

const shadow = {
  shadowOpacity: 0.2,
  elevation: Platform.OS === 'android' ? 3 : 1,
  shadowRadius: 6,
  shadowOffset: { width: 1, height: 2 },
};

const ButtonContainer = styled.TouchableOpacity(
  ({ theme: { colors }, $variant, $withShadow, $loading }) => ({
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 10,
    background: colors.primary,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
    ...($variant === "rounded" && {
      borderRadius: 20,
    }),
    ...($variant === "white" && {
      background: colors.white,
    }),
    ...($withShadow && {
      shadowColor: colors.opaqueDark,
      ...shadow,
    }),
    ...($loading && {
      background: "#ccc",
    }),
  })
);

const ButtonText = styled.Text(
  ({ theme: { colors, fonts, fontSize }, $variant, $fontSize }) => ({
    color: colors.white,
    fontFamily: fonts.primary,
    fontSize: fontSize[$fontSize],
    ...($variant === "white" && {
      color: colors.opaqueDark,
    }),
  })
);

const StyledImage = styled.Image(({ isLeft, $fontSize }) => ({
  marginRight: isLeft ? 10 : 0,
  marginLeft: !isLeft ? 10 : 0,
  ...(["extraSmall", "small", "regular"].includes($fontSize) && {
    height: 25,
    width: 25,
  }),
  ...(["semiLarge", "large", "larger", "xl"].includes($fontSize) && {
    height: 30,
    width: 30,
  }),
}));

const Button = ({
  children,
  variant = "default",
  onPress,
  fontSize = "regular",
  withShadow = false,
  iconLeft = null,
  iconRight = null,
  loading,
  ...props
}) => {
  return (
    <ButtonContainer
      $variant={variant}
      onPress={onPress}
      $withShadow={withShadow}
      $loading={loading}
      disabled={!!loading}
      {...props}
    >
      {iconLeft && (
        <StyledImage isLeft source={iconLeft} $fontSize={fontSize} />
      )}
      {loading ? (
        <ActivityIndicator />
      ) : (
        <ButtonText $variant={variant} $fontSize={fontSize}>
          {children}
        </ButtonText>
      )}

      {iconRight && (
        <StyledImage source={iconRight} style={{ width: 25, height: 33 }} />
      )}
    </ButtonContainer>
  );
};

export default Button;
