import { useState } from 'react';
import styled from 'styled-components/native';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Input from '../components/Input';
import StyledScreen from '../components/StyledScreen';
import Typography from '../components/Typography';
import googleLogo from '../assets/images/google.png';
import Divider from '../components/Divider';
import LinkButton from '../components/LinkButton';

const HomeScreenContainer = styled.SafeAreaView(() => ({
  justifyContent: 'center',
  flex: 1,
  alignItems: 'center',
  marginHorizontal: 25,
}));

const FormContainer = styled.View(() => ({
  marginHorizontal: 25,
}));

const JustifiedButton = styled.View(() => ({
  alignItems: 'flex-end',
  padding: 0,
}));

function LoginScreen({ navigation }) {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const onChange = (key, value) => setFormValue({ ...formValue, [key]: value });

  return (
    <StyledScreen showBackButton>
      <HomeScreenContainer>
        <FormContainer>
          <Typography font="secondary" fontSize="xl">
            Welcome Back!
          </Typography>
          <Gap size={22} direction="vertical" />
          <Input
            placeholder="Email"
            value={formValue.email}
            onChange={(value) => onChange('email', value)}
          />
          <Gap size={15} direction="vertical" />
          <Input
            placeholder="Password"
            isPassword
            value={formValue.password}
            onChange={(value) => onChange('password', value)}
          />
          <Gap size={10} direction="vertical" />
          <JustifiedButton>
            <LinkButton
              hideBorder
              size="extraSmall"
              onPress={() => navigation.navigate('ForgetPassword')}
            >
              Forget Password?
            </LinkButton>
          </JustifiedButton>
        </FormContainer>
        <Gap size={30} direction="vertical" />
        <Button>Login</Button>
        <Divider dividerText="OR" />
        <Button variant="white" withShadow iconLeft={googleLogo}>
          Sign in with Google
        </Button>
        <Gap size={30} direction="vertical" />
        <Typography color="opaqueDark" fontSize="small">
          New Here?
        </Typography>
        <LinkButton variant="light" onPress={() => navigation.navigate('Signup')}>
          Sign Up
        </LinkButton>
      </HomeScreenContainer>
    </StyledScreen>
  );
}

export default LoginScreen;
