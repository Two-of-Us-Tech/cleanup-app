import styled from 'styled-components/native';
import { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';
import toastConfig from '../config/toastConfig';
import StyledScreen from '../components/StyledScreen';
import Typography from '../components/Typography';
import Button from '../components/Button';
import Input from '../components/Input';
import LinkButton from '../components/LinkButton';
import ImageSelector from '../components/ImageSelector';
import i18n from '../config/translation';
import userRegister from '../stores/userRegister.store';

const StyledContainer = styled.View(() => ({
  alignItems: 'center',
  marginHorizontal: 20,
  marginTop: 38,
}));

const FormContainer = styled.View`
  margin-top: 22px;
  padding-bottom: 200px;
  width: 100%;
`;

const StyledLink = styled(LinkButton)`
  margin-top: 10px;
  align-self: center;
`;

const StyledButton = styled(Button)`
  width: 90%;
  align-self: center;
`;

const validationSchema = Yup.object().shape({
  name: Yup.string().required(i18n.t('signUp:isRequired', { field: i18n.t('signUp:name') })),
  email: Yup.string()
    .email(i18n.t('signUp:invalidEmail'))
    .required(i18n.t('signUp:isRequired', { field: i18n.t('signUp:email') })),
  password: Yup.string()
    .required(i18n.t('signUp:isRequired', { field: i18n.t('signUp:password') }))
    .min(6, i18n.t('signUp:mustBe', { field: i18n.t('signUp:password'), character: '6' })),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], i18n.t('signUp:passwordMustMatch'))
    .required(i18n.t('signUp:isRequired', { field: i18n.t('signUp:confirmPassword') })),
  phoneNumber: Yup.string('').required(
    i18n.t('signUp:isRequired', { field: i18n.t('signUp:phoneNumber') })
  ),
});

function SignupScreen({ navigation }) {
  const [image, setImage] = useState(null);
  const { colors } = useTheme();
  const { user, isLoading, error, register } = userRegister((state) => state);
  const { t } = useTranslation('signUp');

  useEffect(() => {
    if (user) {
      Toast.show({
        type: 'default',
        props: {
          icon: 'ios-checkbox',
          label: t('success'),
          iconColor: colors.primary,
          onHide: () => Toast.hide(),
        },
      });

      setTimeout(() => {
        navigation.navigate('Login');
      }, 2500);
    }
  }, [user, navigation, colors.primary, t]);

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

  const renderInput = (placeholder, key, icon, formikProps, isPassword) => {
    const { handleBlur, handleChange, values, errors, touched } = formikProps;
    return (
      <Input
        gapSize={10}
        value={values[key]}
        placeholder={placeholder}
        textAlign="left"
        isPassword={isPassword}
        error={getFieldError(key, errors, touched)}
        inputProps={{
          onChangeText: handleChange(key),
          onBlur: handleBlur(key),
          autoCapitalize: 'none',
        }}
        icon={icon}
      />
    );
  };

  const getFieldError = (key, errors, touched) => (touched[key] ? errors[key] : '');

  const onSubmit = async ({ email, password, phoneNumber, name }) => {
    register({ email, password, phoneNumber, name, image });
  };

  return (
    <StyledScreen variant="secondary" showBackButton>
      <Toast config={toastConfig} />
      <StyledContainer>
        {/* TODO - Change this */}
        <Typography>Sign up by filling the form bellow</Typography>
        <ImageSelector
          image={image?.uri || null}
          onChange={(updatedImage) => {
            setImage(updatedImage);
          }}
        />
        <KeyboardAwareScrollView style={{ width: '100%' }}>
          <FormContainer>
            <Formik
              enableReinitialize
              initialValues={{
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                phoneNumber: '',
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ handleSubmit, ...formikProps }) => (
                <>
                  {renderInput(t('signUp:name'), 'name', 'person-circle-outline', formikProps)}
                  {renderInput(t('signUp:email'), 'email', 'at', formikProps)}
                  {renderInput(
                    t('signUp:password'),
                    'password',
                    'lock-closed-outline',
                    formikProps,
                    true
                  )}
                  {renderInput(
                    t('signUp:confirmPassword'),
                    'confirmPassword',
                    'lock-closed-outline',
                    formikProps,
                    true
                  )}
                  {renderInput(t('signUp:phoneNumber'), 'phoneNumber', 'call', formikProps)}
                  <StyledButton onPress={handleSubmit} withShadow loading={isLoading}>
                    Sign Up
                  </StyledButton>
                  <StyledLink onPress={() => navigation.navigate('Login')} hideBorder>
                    Already have an account? Login
                  </StyledLink>
                </>
              )}
            </Formik>
          </FormContainer>
        </KeyboardAwareScrollView>
      </StyledContainer>
    </StyledScreen>
  );
}

export default SignupScreen;
