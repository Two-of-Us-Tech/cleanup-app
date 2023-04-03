import StyledScreen from "../components/StyledScreen";
import Typography from "../components/Typography";
import Button from "../components/Button";
import { BlurView } from "expo-blur";
import styled from "styled-components";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Gap from "../components/Gap";
import { useNavigation } from "@react-navigation/native";
import LinkButton from "../components/LinkButton";

const StyledBlur = styled(BlurView)`
  height: 100%;
  justify-content: center;
`;

const CardContainer = styled.View(({ theme: { colors } }) => ({
  shadowOpacity: 0.2,
  elevation: 1,
  shadowRadius: 6,
  shadowOffset: { width: 1, height: 2 },
  shadowColor: colors.opaqueDark,
  marginHorizontal: 30,
  borderRadius: 5,
  background: colors.white,
  paddingHorizontal: 27,
  paddingVertical: 30,
}));

const TextContainer = styled.View`
  align-items: center;
`;

const CenteredText = styled(Typography)`
  text-align: center;
`

const CenteredLink = styled(LinkButton)`
  align-self: center;
` 

const AccessDeniedScreen = () => {
  const navigation = useNavigation();

  return (
    <StyledScreen>
      <StyledBlur intensity={20} tint="light">
        <SafeAreaView>
          <CardContainer>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={28} color="black" />
            </TouchableOpacity>
            <TextContainer>
              <Typography font="secondary" fontSize="xl">
                Ops!
              </Typography>
              <Gap size={10} direction="vertical" />
              <CenteredText
                color="opaquePrimary"
                fontSize="small"
                fontSpacing="spaced"
              >
                Log in or create an account to have access to all features.
              </CenteredText>
            </TextContainer>
            <Gap size={30} direction="vertical" />
            <Button onPress={() => navigation.navigate("Signup")}>
              Sign Up
            </Button>
            <Gap size={10} direction="vertical" />
            <CenteredLink hideBorder size="small" onPress={() => navigation.navigate("Login")}>
              Already have an account? Login
            </CenteredLink>
          </CardContainer>
        </SafeAreaView>
      </StyledBlur>
    </StyledScreen>
  );
};

export default AccessDeniedScreen;
