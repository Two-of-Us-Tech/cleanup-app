import { useEffect } from 'react';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';
import Toast from 'react-native-toast-message';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';
import { Formik } from 'formik';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Input from '../components/Input';
import StyledScreen from '../components/StyledScreen';
import Typography from '../components/Typography';
import Divider from '../components/Divider';
import LinkButton from '../components/LinkButton';
import userStore from '../stores/user.store';
import toastConfig from '../config/toastConfig';
import i18n from '../config/translation';

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

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(i18n.t('login:invalidEmail'))
    .required(i18n.t('login:isRequired', { field: i18n.t('login:email') })),
  password: Yup.string().required(i18n.t('login:isRequired', { field: i18n.t('login:password') })),
});

function LoginScreen({ navigation }) {
  const { t } = useTranslation('login');
  const { colors } = useTheme();
  const { login, user, isLoading, error } = userStore((state) => state);

  useEffect(() => {
    if (user) {
      navigation.navigate('MyEvents');
    }
  }, [user, navigation]);

  useEffect(() => {
    if (error) {
      Toast.show({
        type: 'default',
        props: {
          icon: 'ios-close-circle',
          label: t('error'),
          textColor: 'oranged',
          iconColor: colors.oranged,
          onHide: () => Toast.hide(),
        },
      });
    }
  }, [error, navigation, colors.oranged, t]);

  return (
    <StyledScreen showBackButton>
      <Toast config={toastConfig} />
      <HomeScreenContainer>
        <Formik
          enableReinitialize
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => login(values.email, values.password)}
        >
          {({ handleSubmit, handleBlur, handleChange, values, errors, touched }) => (
            <>
              <FormContainer>
                <Typography font="secondary" fontSize="xl">
                  {t('title')}
                </Typography>
                <Gap size={22} direction="vertical" />
                <Input
                  placeholder={t('email')}
                  value={values.email}
                  error={touched.email ? errors.email : ''}
                  inputProps={{
                    autoCapitalize: 'none',
                    onChangeText: handleChange('email'),
                    onBlur: handleBlur('email'),
                  }}
                />
                <Gap size={15} direction="vertical" />
                <Input
                  placeholder={t('password')}
                  isPassword
                  value={values.password}
                  error={touched.password ? errors.password : ''}
                  inputProps={{
                    autoCapitalize: 'none',
                    onChangeText: handleChange('password'),
                    onBlur: handleBlur('password'),
                  }}
                />
                <Gap size={10} direction="vertical" />
                <JustifiedButton>
                  <LinkButton
                    hideBorder
                    size="extraSmall"
                    onPress={() => navigation.navigate('ForgetPassword')}
                  >
                    {t('forgetPassword')}
                  </LinkButton>
                </JustifiedButton>
              </FormContainer>
              <Gap size={30} direction="vertical" />
              <Button onPress={handleSubmit} loading={isLoading}>
                {t('login')}
              </Button>
            </>
          )}
        </Formik>
        <Divider dividerText="OR" />
        <Typography color="opaqueDark" fontSize="small">
          {t('newHere')}
        </Typography>
        <LinkButton variant="light" onPress={() => navigation.navigate('Signup')}>
          {t('signUp')}
        </LinkButton>
      </HomeScreenContainer>
    </StyledScreen>
  );
}

export default LoginScreen;
