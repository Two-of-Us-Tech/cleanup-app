import { useEffect, useState } from "react";
import styled from "styled-components/native";
import Button from "../components/Button";
import Gap from "../components/Gap";
import Input from "../components/Input";
import StyledScreen from "../components/StyledScreen";
import Typography from "../components/Typography";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password Confirmation is Required"),
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

const ForgetPasswordScreen = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      //TODO - Implement API call
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <StyledScreen style="secondary" showBackButton>
      <ScreenContainer>
        <Typography>Forgot Password?</Typography>
        <TextDivider />
        <FormContainer>
          <Formik
            enableReinitialize
            initialValues={{
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              handleSubmit,
              handleBlur,
              handleChange,
              values,
              errors,
              touched,
            }) => (
              <>
                <Input
                  placeholder="New Password"
                  icon="at"
                  error={touched.password ? errors.password : ""}
                  value={values.password}
                  isPassword
                  inputProps={{
                    onChangeText: handleChange("password"),
                    onBlur: handleBlur("password"),
                  }}
                />
                <Gap size={10} direction="vertical" />
                <Input
                  placeholder="Type your email"
                  icon="at"
                  error={touched.confirmPassword ? errors.confirmPassword : ""}
                  value={values.confirmPassword}
                  isPassword
                  inputProps={{
                    onChangeText: handleChange("confirmPassword"),
                    onBlur: handleBlur("confirmPassword"),
                  }}
                />
                <Gap size={10} direction="vertical" />
                <StyledButton loading={isSubmitting} onPress={handleSubmit}>
                  Submit
                </StyledButton>
              </>
            )}
          </Formik>
        </FormContainer>
      </ScreenContainer>
    </StyledScreen>
  );
};

export default ForgetPasswordScreen;
