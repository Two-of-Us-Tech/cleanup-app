import styled from "styled-components/native";
import StyledScreen from "../components/StyledScreen";
import Input from "../components/Input";
import { AntDesign } from "@expo/vector-icons";
import exampleImage from "../assets/images/example.jpeg";
import { useState } from "react";
import EventCard from "../components/EventCard";
import Gap from "../components/Gap";

const ScreenContainer = styled.SafeAreaView(() => ({
  flex: 1,
  marginHorizontal: 20,
  alignItems: "center",
}));

const ContentContainer = styled.View(() => ({
  width: "100%",
  marginTop: 20
}));

const EventListContainer = styled.ScrollView(() => ({
  marginTop: 20,
  height: "100%",
  overflow: 'visible'
}));

const EventListScreen = ({}) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <StyledScreen>
      <ScreenContainer>
        <ContentContainer>
          <Input
            placeholder="Find your event"
            fullWidth
            rounded
            icon={<AntDesign name="search1" size={20} color="black" />}
            value={searchTerm}
            onChange={(value) => setSearchTerm(value)}
          />

          <EventListContainer>
            <EventCard eventName="Cocoa's Beach Cleanup" image={exampleImage} />
            <Gap size={28} direction="vertical" />
            <EventCard eventName="Cocoa's Beach Cleanup" image={exampleImage} />
            <Gap size={28} direction="vertical" />
            <EventCard eventName="Cocoa's Beach Cleanup" image={exampleImage} />
            <Gap size={28} direction="vertical" />
            <EventCard eventName="Cocoa's Beach Cleanup" image={exampleImage} />
            <Gap size={28} direction="vertical" />
            <EventCard eventName="Cocoa's Beach Cleanup" image={exampleImage} />
          </EventListContainer>
        </ContentContainer>
      </ScreenContainer>
    </StyledScreen>
  );
};

export default EventListScreen;
