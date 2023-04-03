import styled from "styled-components/native";
import StyledScreen from "../components/StyledScreen";
import Typography from "../components/Typography";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import LinkButton from "../components/LinkButton";
import { Formik } from "formik";
import * as Yup from "yup";
import ImageSelector from "../components/ImageSelector";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const StyledContainer = styled.View(() => ({
  alignItems: "center",
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
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password Confirmation is Required"),
  phoneNumber: Yup.string("").required("Phone number is required"),
});

const SignupScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          autoCapitalize: "none",
        }}
        icon={icon}
      />
    );
  };

  const getFieldError = (key, errors, touched) =>
    touched[key] ? errors[key] : "";

  // TODO - Call the actual API
  const onSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      navigation.navigate("EventList");
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <StyledScreen style="secondary" showBackButton>
      <StyledContainer>
        <Typography>Sign up by filling the form bellow</Typography>
        <ImageSelector image={image} onChange={(image) => setImage(image)} />
        <KeyboardAwareScrollView style={{ width: "100%" }}>
          <FormContainer>
            <Formik
              enableReinitialize
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                phoneNumber: "",
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ handleSubmit, ...formikProps }) => (
                <>
                  {renderInput(
                    "Name",
                    "name",
                    "person-circle-outline",
                    formikProps
                  )}
                  {renderInput("Email", "email", "at", formikProps)}
                  {renderInput(
                    "Password",
                    "password",
                    "lock-closed-outline",
                    formikProps,
                    true
                  )}
                  {renderInput(
                    "Confirm Password",
                    "confirmPassword",
                    "lock-closed-outline",
                    formikProps,
                    true
                  )}
                  {renderInput(
                    "Phone Number",
                    "phoneNumber",
                    "call",
                    formikProps
                  )}
                  <StyledButton
                    onPress={handleSubmit}
                    withShadow
                    loading={isSubmitting}
                  >
                    Sign Up
                  </StyledButton>
                  <StyledLink
                    onPress={() => navigation.navigate("Login")}
                    hideBorder
                  >
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
};

export default SignupScreen;
