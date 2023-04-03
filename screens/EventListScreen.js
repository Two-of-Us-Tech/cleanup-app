import styled from "styled-components/native";
import StyledScreen from "../components/StyledScreen";
import Input from "../components/Input";
import exampleImage from "../assets/images/example.jpeg";
import { useState } from "react";
import EventCard from "../components/EventCard";
import Gap from "../components/Gap";
import Navigator from "../components/Navigator";
import { Platform } from "react-native";

const ScreenContainer = styled.SafeAreaView(() => ({
  flex: 1,
  marginHorizontal: 20,
  ...Platform.OS === 'android' && {
    marginTop: 30
  }
}));

const EventListContainer = styled.ScrollView(() => ({
  marginTop: 20,
  marginTop: 10,
  marginBottom: Platform.OS === 'android' ? 80 : 100,
  overflow: 'visible'
}));

const EventListScreen = ({}) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <StyledScreen>
      <ScreenContainer>
        <EventListContainer showsVerticalScrollIndicator={false}>
          <Input
            placeholder="Find your event"
            icon="search"
            value={searchTerm}
            onChange={(value) => setSearchTerm(value)}
          />
          <EventCard
            id={1}
            eventName="Cocoa's Beach Cleanup"
            image={exampleImage}
          />
          <Gap size={28} direction="vertical" />
          <EventCard
            id={2}
            eventName="Cocoa's Beach Cleanup"
            image={exampleImage}
          />
          <Gap size={28} direction="vertical" />
          <EventCard
            id={3}
            eventName="Cocoa's Beach Cleanup"
            image={exampleImage}
          />
          <Gap size={28} direction="vertical" />
          <EventCard
            id={4}
            eventName="Cocoa's Beach Cleanup"
            image={exampleImage}
          />
          <Gap size={28} direction="vertical" />
          <EventCard
            id={5}
            eventName="Cocoa's Beach Cleanup"
            image={exampleImage}
          />
          <Gap size={28} direction="vertical" />
        </EventListContainer>
      </ScreenContainer>
      <Navigator />
    </StyledScreen>
  );
};

export default EventListScreen;
