import styled from "styled-components/native";
import StyledScreen from "../components/StyledScreen";
import Input from "../components/Input";
import Icon from "../assets/images/search-icon.svg";
import { useState } from "react";

const ScreenContainer = styled.SafeAreaView(() => ({
  flex: 1,
  marginHorizontal: 20,
  alignItems: "center",
}));

const ContentContainer = styled.View(() => ({
  width: '100%',
  marginTop: 20
}));

const EventListScreen = ({}) => {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <StyledScreen>
      <ScreenContainer>
        <ContentContainer>
          <Input placeholder="Find your event" fullWidth rounded Icon={Icon} value={searchTerm} onChange={value => setSearchTerm(value)}/>
        </ContentContainer>
      </ScreenContainer>
    </StyledScreen>
  );
};

export default EventListScreen;
