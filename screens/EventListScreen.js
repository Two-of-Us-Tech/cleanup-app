import styled from "styled-components/native";
import StyledScreen from "../components/StyledScreen";
import Input from "../components/Input";
import exampleImage from "../assets/images/example.jpeg";
import { useState } from "react";
import EventCard from "../components/EventCard";
import Gap from "../components/Gap";
import Navigator from "../components/Navigator";

const ScreenContainer = styled.SafeAreaView(() => ({
  flex: 1,
  marginHorizontal: 20
}));

const ContentContainer = styled.View(() => ({
  width: "100%",
  marginTop: 20
}));

const EventListContainer = styled.ScrollView(() => ({
  marginTop: 10,
  marginBottom: 100
}));

const EventListScreen = ({}) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <StyledScreen>
      <ScreenContainer>
        <ContentContainer>
          <Input
            placeholder="Find your event"
            icon="search"
            value={searchTerm}
            onChange={(value) => setSearchTerm(value)}
          />
          <EventListContainer showsVerticalScrollIndicator={false} >
            <EventCard id={1} eventName="Cocoa's Beach Cleanup" image={exampleImage} />
            <Gap size={28} direction="vertical" />
            <EventCard id={2} eventName="Cocoa's Beach Cleanup" image={exampleImage} />
            <Gap size={28} direction="vertical" />
            <EventCard id={3} eventName="Cocoa's Beach Cleanup" image={exampleImage} />
            <Gap size={28} direction="vertical" />
            <EventCard id={4} eventName="Cocoa's Beach Cleanup" image={exampleImage} />
            <Gap size={28} direction="vertical" />
            <EventCard id={5} eventName="Cocoa's Beach Cleanup" image={exampleImage} />
          </EventListContainer>
        </ContentContainer>
      </ScreenContainer>
      <Navigator />
    </StyledScreen>
  );
};

export default EventListScreen;
