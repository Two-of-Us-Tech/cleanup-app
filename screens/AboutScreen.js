import styled from "styled-components/native";
import StyledScreen from "../components/StyledScreen";
import Typography from "../components/Typography";

const TextContainer = styled.View`
  margin-horizontal: 32px;
`;

const StyledText = styled(Typography)`
  line-height: 21.5px;
`

const AboutScreen = () => {
  return (
    <StyledScreen showBackButton headerText="About the App" style="secondary">
      <TextContainer>
        <StyledText fontSize="extraSmall" color="opaqueDark" fontSpacing="spaced" font="primary">
          The "CleanUP" app is a mobile application designed to bring the
          community together to clean beaches and promote environmental
          awareness. The app allows users to create and join local beach
          clean-up events, share information about the condition of their local
          beaches, and connect with like-minded individuals who are passionate
          about protecting our oceans and marine life. Users can easily create a
          clean-up event by selecting a date, time, and location, and inviting
          friends and other community members to join. The app also provides
          tools for promoting events on social media and tracking attendance.
          During the clean-up, participants can use the app to log the types and
          quantities of trash collected, providing valuable data that can be
          used to monitor and improve beach cleanliness over time. The app also
          includes educational resources and tips for reducing plastic waste and
          other sources of marine pollution. In addition to its practical
          features, the CleanUp app fosters a sense of community among users,
          allowing them to share their passion for environmental sustainability
          and collaborate on meaningful initiatives that have a positive impact
          on the planet.
        </StyledText>
      </TextContainer>
    </StyledScreen>
  );
};

export default AboutScreen;
