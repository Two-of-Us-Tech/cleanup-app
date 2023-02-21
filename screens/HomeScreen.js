import { useState } from "react";
import styled from "styled-components/native";
import Button from "../components/Button";
import Gap from "../components/Gap";
import Input from "../components/Input";
import StyledScreen from "../components/StyledScreen";
import Typography from "../components/Typography";

const HomeScreenContainer = styled.SafeAreaView(() => ({
  justifyContent: "center",
  flex: 1,
  alignItems: "center",
  marginHorizontal: 25,
}));

const FormContainer = styled.View(() => ({
  marginHorizontal: 25,
}));

const JustifiedButton = styled.View(() => ({
  alignItems: "flex-end",
  padding: 0,
  transform: "translateX(40px)",
}));

const Divider = styled.View(({ theme: { colors } }) => ({
  height: 1,
  background: colors.darkTransparent,
  width: "100%",
  margin: 35,
}));

const HomeScreen = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const onChange = (key, value) => setFormValue({ ...formValue, [key]: value });

  return (
    <StyledScreen>
      <HomeScreenContainer>
        <FormContainer>
          <Typography font="secondary" fontSize="xl">
            Welcome Back!
          </Typography>
          <Gap size={22} direction="vertical" />
          <Input
            placeholder="Email"
            value={formValue.email}
            onChange={(value) => onChange("email", value)}
          />
          <Gap size={15} direction="vertical" />
          <Input
            placeholder="Password"
            isPassword
            value={formValue.password}
            onChange={(value) => onChange("password", value)}
          />
          <Gap size={10} direction="vertical" />
          <JustifiedButton>
            <Button variant="light" hideBorder fontSize="extrasmall">
              Forget Password?
            </Button>
          </JustifiedButton>
        </FormContainer>
        <Gap size={30} direction="vertical" />
        <Button>Login</Button>
        <Divider />
        <Button variant="white" withShadow>Login with Google</Button>
        <Gap size={30} direction="vertical" />
        <Typography color="opaqueDark" fontSize="small">
          New Here?
        </Typography>
        <Button variant="light" onPress={() => {}} >
          Sign Up
        </Button>
      </HomeScreenContainer>
    </StyledScreen>
  );
};

export default HomeScreen;
