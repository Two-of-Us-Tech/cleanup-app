import { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Input from '../components/Input';
import StyledScreen from '../components/StyledScreen';
import Typography from '../components/Typography';

const ScreenContainer = styled.View`
  position: relative;
  margin-top: 120px;
  margin-horizontal: 30px;
`;

const TextDivider = styled.View`
  margin-top: 38px;
  height: 1px;
  width: 100%;
  background: ${({ theme: { colors } }) => colors.tertiaryDark};
`;
const FormContainer = styled.View`
  margin-top: 46px;
`;

const StyledButton = styled(Button)`
  width: 90%;
  align-self: center;
`;

function ForgetPasswordScreen() {
  const [email, setEmail] = useState();
  const [error, setError] = useState(false);
  const { t } = useTranslation('forgetPassword');

  const onSubmit = () => {
    if (!email) {
      setError(t('alertMessage'));
    } else {
      // TODO - do something
    }
  };

  useEffect(() => {
    if (email && error) {
      setError(null);
    }
  }, [email, error]);

  return (
    <StyledScreen variant="secondary" showBackButton>
      <ScreenContainer>
        <Typography>{t('title')}</Typography>
        <TextDivider />
        <FormContainer>
          <Input
            placeholder={t('placeholder')}
            icon="lock-closed-outline"
            onChange={(value) => setEmail(value)}
            error={error}
            value={email}
          />
          <Gap size={10} direction="vertical" />
          <StyledButton onPress={() => onSubmit()}>{t('submit')}</StyledButton>
        </FormContainer>
      </ScreenContainer>
    </StyledScreen>
  );
}

export default ForgetPasswordScreen;
