import styled from "styled-components/native";
import Navigator from "../components/Navigator";
import StyledScreen from "../components/StyledScreen";
import Typography from "../components/Typography";

const ScreenContainer = styled.SafeAreaView(() => ({
  flex: 1,
  marginHorizontal: 20,
}));

const StyledTitle = styled(Typography)(() => ({
  textAlign: "center",
  marginTop: 20,
}));

const MapScreen = () => {
  return (
    <StyledScreen>
      <ScreenContainer>
        <StyledTitle color="opaqueDark" fontSpacing="spaced">
          Map Screen
        </StyledTitle>
      </ScreenContainer>
      <Navigator />
    </StyledScreen>
  );
};

export default MapScreen
