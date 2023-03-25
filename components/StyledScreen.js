import styled from "styled-components/native";

const ScreenContainer = styled.View(({ theme: { colors } }) => ({
  flex: 1,
  position: "relative",
  overflow: "hidden",
  background: colors.white,
}));

const CircleOne = styled.View(({ theme: { colors } }) => ({
  position: "absolute",
  width: 432,
  height: 417,
  borderRadius: 1000,
  top: -20,
  left: -150,
  background: colors.secondary,
}));

const CircleTwo = styled.View(({ theme: { colors } }) => ({
  position: "absolute",
  width: 468,
  height: 474,
  zIndex: -1,
  top: -20,
  right: -200,
  borderRadius: 1000,
  background: colors.tertiary,
}));

const SecondaryItemContainer = styled.View(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: "center",
  alignItems: "center",
}));

const SecondaryCircle = styled.View(({ theme: { colors } }) => ({
  position: 'absolute',
  bottom: 0,
  zIndex: -1,
  height: '78%',
  width: 700,
  background: colors.tertiary,
  borderTopLeftRadius: 1000,
  borderTopRightRadius: 1000,
}));

const StyledScreen = ({ children, style = "default", ...props }) => {
  return (
    <ScreenContainer {...props}>
      {style === "default" && (
        <>
          <CircleOne />
          <CircleTwo />
        </>
      )}
      {style === "secondary" && (
        <SecondaryItemContainer>
          <SecondaryCircle />
        </SecondaryItemContainer>
      )}
      {children}
    </ScreenContainer>
  );
};

export default StyledScreen;
