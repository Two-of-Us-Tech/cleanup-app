import styled from 'styled-components/native';
import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTranslation } from 'react-i18next';
import StyledScreen from '../components/StyledScreen';
import Typography from '../components/Typography';
import Button from '../components/Button';
import Input from '../components/Input';
import LinkButton from '../components/LinkButton';
import ImageSelector from '../components/ImageSelector';
import i18n from '../config/translation';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation('signUp');

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

  // TODO - Call the actual API
  const onSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      navigation.navigate('EventList');
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <StyledScreen variant="secondary" showBackButton>
      <StyledContainer>
        <Typography>Sign up by filling the form bellow</Typography>
        <ImageSelector image={image} onChange={(updatedImage) => setImage(updatedImage)} />
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
                  <StyledButton onPress={handleSubmit} withShadow loading={isSubmitting}>
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
