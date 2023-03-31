import styled, { useTheme } from "styled-components/native";
import StyledScreen from "../components/StyledScreen";
import Typography from "../components/Typography";
import Button from "../components/Button";
import { Ionicons } from "@expo/vector-icons";
import Input from "../components/Input";
import { useState } from "react";
import LinkButton from "../components/LinkButton";
import * as ImagePicker from "expo-image-picker";
import { Formik } from "formik";
import * as Yup from "yup";

const StyledContainer = styled.SafeAreaView(() => ({
  alignItems: "center",
  marginHorizontal: 20,
  marginTop: 38
}));

const ImageContainer = styled.View(() => ({
  position: "relative",
  marginTop: 50,
}));

const imageProps = {
  height: 100,
  width: 100,
  borderRadius: 50,
};
const UserImage = styled.Image(() => ({
  ...imageProps,
}));

const ImageHolder = styled.View(() => ({
  ...imageProps,
  background: "#ccc",
}));

const StyledTouchable = styled.TouchableOpacity(({ theme: { colors } }) => ({
  position: "absolute",
  right: 10,
  bottom: 0,
  padding: 5,
  borderRadius: 50,
  background: colors.primary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const FormContainer = styled.View`
  margin-top: 22px;
  width: 100%;
`;

const StyledLink = styled(LinkButton)`
  margin-top: 10px;
  align-self: center;
`;

const StyledButton = styled(Button)`
  width: 90%;
  align-self: center;
`

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
  const { colors } = useTheme();
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

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
      setIsSubmitting(false)
    }, 2000);
  }

  return (
    <StyledScreen style="secondary" showBackButton>
      <StyledContainer>
        <Typography>Sign up by filling the form bellow</Typography>
        <ImageContainer>
          {image ? <UserImage source={{ uri: image }} /> : <ImageHolder />}
          <StyledTouchable onPress={pickImage}>
            <Ionicons name="camera-outline" size={18} color={colors.white} />
          </StyledTouchable>
        </ImageContainer>
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
                <StyledLink onPress={() => navigation.navigate("Login")} hideBorder>
                  Already have an account? Login
                </StyledLink>
              </>
            )}
          </Formik>
        </FormContainer>
      </StyledContainer>
    </StyledScreen>
  );
};

export default SignupScreen;
