import { Image, SafeAreaView, Text } from "react-native";
import styled from "styled-components";
import loginImageHome from "../assets/images/login-image.png";

const LoginScreenContainer = styled(SafeAreaView)(({ theme: { colors } }) => ({
  flex: 1,
  position: "relative",
  background: colors.white,
  justifyContent: 'center',
  alignItems: 'center'
}));

const LoginImage = styled(Image)(() => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: 488,
  height: 400
}))

const Login = () => {
  return (
    <LoginScreenContainer>
      <Text>Login Page</Text>
      <LoginImage source={loginImageHome} />
    </LoginScreenContainer>
  );
};

export default Login;
