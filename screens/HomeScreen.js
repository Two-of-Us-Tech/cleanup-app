import styled from "styled-components/native";
import HomeImageHome from "../assets/images/login-image.png";
import Button from "../components/Button";
import Gap from "../components/Gap";
import Typography from "../components/Typography";

const HomeScreenContainer = styled.SafeAreaView(({ theme: { colors } }) => ({
  flex: 1,
  position: "relative",
  background: colors.white,
  alignItems: "center",
  justifyContent: "center",
}));

const HomeImage = styled.Image(() => ({
  position: "absolute",
  bottom: 0,
  right: 0,
  width: 488,
  height: 400,
  zIndex: -1,
}));

const ContentContainer = styled.View(() => ({
  marginBottom: 220,
  alignItems: "center",
}));

const ButtonsContainer = styled.View(() => ({
  marginTop: 55,
}));

const TextContainer = styled.View(() => ({
  display: "flex",
  gap: 10,
  alignItems: "center",
  marginHorizontal: 10,
}));

const HomeScreen = ({ navigation }) => {
  return (
    <HomeScreenContainer>
      <ContentContainer>
        <TextContainer>
          <Typography font="secondary" fontSize="xl">
            Clean Up
          </Typography>
          <Gap size={15} direction="vertical" />
          <Typography color="opaquePrimary" textAlign="center">
            Volunteers events to make your community a better place
          </Typography>
        </TextContainer>
        <ButtonsContainer>
          <Button onPress={() => navigation.navigate("Login")}>Login</Button>
          <Gap size={12} direction="vertical" />
          <Button variant="light" onPress={() => navigation.navigate("EventList")}>Find an Event</Button>
        </ButtonsContainer>
      </ContentContainer>
      <HomeImage source={HomeImageHome} />
    </HomeScreenContainer>
  );
};

export default HomeScreen;
