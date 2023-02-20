import { View } from "react-native";
import styled from "styled-components/native";
import loginImageHome from "../assets/images/login-image.png";
import Button from "../components/Button";
import Gap from "../components/Gap";
import Typography from "../components/Typography";

const LoginScreenContainer = styled.SafeAreaView(({ theme: { colors } }) => ({
  flex: 1,
  position: "relative",
  background: colors.white,
  alignItems: "center",
  justifyContent: "center",
}));

const LoginImage = styled.Image(() => ({
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
  display: 'flex',
  gap: 10,
  alignItems: 'center',
  marginHorizontal: 10
}))

const Login = () => {
  return (
    <LoginScreenContainer>
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
          <Button>Log In</Button>
          <Gap size={8} direction="vertical" />
          <Button variant="light">
            Find an Event
          </Button>
        </ButtonsContainer>
      </ContentContainer>
      <LoginImage source={loginImageHome} />
    </LoginScreenContainer>
  );
};

export default Login;
