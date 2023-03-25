import styled from "styled-components/native";
import EventCard from "../components/EventCard";
import Gap from "../components/Gap";
import Navigator from "../components/Navigator";
import StyledScreen from "../components/StyledScreen";
import exampleImage from "../assets/images/example.jpeg";
import Typography from "../components/Typography";

const ScreenContainer = styled.SafeAreaView(() => ({
  flex: 1,
  marginHorizontal: 20,
}));

const EventListContainer = styled.ScrollView(() => ({
  marginTop: 20,
  marginBottom: 100,
  overflow: "visible",
}));

const StyledTitle = styled(Typography)(() => ({
  textAlign: "center",
  marginTop: 20,
}));

const MyEventsScreen = () => {
  return (
    <StyledScreen>
      <ScreenContainer>
        <StyledTitle color="opaqueDark" fontSpacing="spaced">
          My Events
        </StyledTitle>
        <EventListContainer>
          <EventCard
            editMode
            id={1}
            eventName="Cocoa's Beach Cleanup"
            image={exampleImage}
          />
          <Gap size={28} direction="vertical" />
          <EventCard
            editMode
            id={2}
            eventName="Cocoa's Beach Cleanup"
            image={exampleImage}
          />
          <Gap size={28} direction="vertical" />
          <EventCard
            editMode
            id={3}
            eventName="Cocoa's Beach Cleanup"
            image={exampleImage}
          />
          <Gap size={28} direction="vertical" />
          <EventCard
            editMode
            id={4}
            eventName="Cocoa's Beach Cleanup"
            image={exampleImage}
          />
          <Gap size={28} direction="vertical" />
          <EventCard
            editMode
            id={5}
            eventName="Cocoa's Beach Cleanup"
            image={exampleImage}
          />
        </EventListContainer>
      </ScreenContainer>
      <Navigator />
    </StyledScreen>
  );
};

export default MyEventsScreen;
