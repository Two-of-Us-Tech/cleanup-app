import { useState } from 'react';
import styled from 'styled-components/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import Gap from '../components/Gap';
import Input from '../components/Input';
import StyledScreen from '../components/StyledScreen';
import Typography from '../components/Typography';
import i18n from '../config/translation';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required(i18n.t('resetPassword:isRequired', { field: i18n.t('resetPassword:newPassword') }))
    .min(
      6,
      i18n.t('resetPassword:mustBe', { field: i18n.t('resetPassword:newPassword'), character: '6' })
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], i18n.t('resetPassword:mustMatch'))
    .required(i18n.t('resetPassword:isRequired', { field: i18n.t('resetPassword:confirmation') })),
});

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation('resetPassword');

  const onSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      // TODO - Implement API call
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <StyledScreen variant="secondary" showBackButton>
      <ScreenContainer>
        <Typography>{t('title')}</Typography>
        <TextDivider />
        <FormContainer>
          <Formik
            enableReinitialize
            initialValues={{
              password: '',
              confirmPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ handleSubmit, handleBlur, handleChange, values, errors, touched }) => (
              <>
                <Input
                  placeholder={t('newPassword')}
                  icon="lock-closed-outline"
                  error={touched.password ? errors.password : ''}
                  value={values.password}
                  isPassword
                  inputProps={{
                    onChangeText: handleChange('password'),
                    onBlur: handleBlur('password'),
                  }}
                />
                <Gap size={10} direction="vertical" />
                <Input
                  placeholder={t('confirmation')}
                  icon="lock-closed-outline"
                  error={touched.confirmPassword ? errors.confirmPassword : ''}
                  value={values.confirmPassword}
                  isPassword
                  inputProps={{
                    onChangeText: handleChange('confirmPassword'),
                    onBlur: handleBlur('confirmPassword'),
                  }}
                />
                <Gap size={10} direction="vertical" />
                <StyledButton loading={isSubmitting} onPress={handleSubmit}>
                  {t('submit')}
                </StyledButton>
              </>
            )}
          </Formik>
        </FormContainer>
      </ScreenContainer>
    </StyledScreen>
  );
}

export default ForgetPasswordScreen;
