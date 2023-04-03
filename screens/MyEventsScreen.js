import styled from "styled-components/native";
import Navigator from "../components/Navigator";
import StyledScreen from "../components/StyledScreen";
import Gap from "../components/Gap";

import Typography from "../components/Typography";
import ItemInfo from "../components/ItemInfo";
import { Platform } from "react-native";

const ScreenContainer = styled.SafeAreaView(() => ({
  flex: 1,
  marginHorizontal: 20,
  marginTop: Platform.OS === 'android' ?  0 : -10,
}));

const EventListContainer = styled.ScrollView(() => ({
  marginBottom: Platform.OS === 'android' ?  100 : 60
}));

const ListHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-vertical: 12px;
`;

const Divider = styled.View`
  height: 1px;
  background: ${({ theme: { colors } }) => colors.darkTransparent};
  width: 100%;
`;

const NoEventsLabel = styled(Typography)`
  text-align: center;
  margin-top: 100px;
  margin-bottom: 80px;
`;
const MyEventsScreen = () => {
  const renderListHeader = (title) => {
    return (
      <ListHeader>
        <Typography font="primaryBold" fontSpacing="spaced">
          {title}
        </Typography>
        <Gap size={10} />
        <Divider />
      </ListHeader>
    );
  };
  return (
    <StyledScreen headerText="My Events">
      <ScreenContainer>
        <EventListContainer showsVerticalScrollIndicator={false}>
          {renderListHeader("This Month")}
          <NoEventsLabel
            color="darkTransparent"
            fontSpacing="spaced"
            fontSize="small"
          >
            You have no events assigned yet!
          </NoEventsLabel>
          {renderListHeader("This Month")}
          <ItemInfo
            day={14}
            month="Feb"
            location="Far away location"
            title="Your event name goes here"
          />
          <Gap size={10} direction="vertical" />
          <ItemInfo
            day={14}
            month="Feb"
            location="Far away location"
            title="Your event name goes here"
          />
          {renderListHeader("Past Events")}
          <ItemInfo
            isEventDue
            day={14}
            month="Feb"
            location="Far away location"
            title="Your event name goes here"
          />
          <Gap size={10} direction="vertical" />
          <ItemInfo
            isEventDue
            day={14}
            month="Feb"
            location="Far away location"
            title="Your event name goes here"
          />
        </EventListContainer>
      </ScreenContainer>
      <Navigator />
    </StyledScreen>
  );
};

export default MyEventsScreen;
