import { SafeAreaView, Text } from "react-native";
import styled from "styled-components";

const ScreenContainer = styled.View(() => ({
  flex: 1,
  position: "relative",
  overflow: 'hidden'
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
  borderRadius: 10009,
  background: colors.tertiary,
}));

const StyledScreen = ({ children }) => {
  return (
    <ScreenContainer>
      <CircleOne />
      <CircleTwo />
      {children}
    </ScreenContainer>
  );
};

export default StyledScreen;
