import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import Navigator from '../components/Navigator';
import StyledScreen from '../components/StyledScreen';
import Gap from '../components/Gap';

import Typography from '../components/Typography';
import ItemInfo from '../components/ItemInfo';

const ScreenContainer = styled.SafeAreaView(() => ({
  flex: 1,
  marginHorizontal: 20,
  marginTop: Platform.OS === 'android' ? 0 : -10,
}));

const EventListContainer = styled.ScrollView(() => ({
  marginBottom: Platform.OS === 'android' ? 100 : 60,
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
function MyEventsScreen() {
  const { t } = useTranslation('myEvents');

  const renderListHeader = (title) => (
    <ListHeader>
      <Typography font="primaryBold" fontSpacing="spaced">
        {title}
      </Typography>
      <Gap size={10} />
      <Divider />
    </ListHeader>
  );
  return (
    <StyledScreen headerText="My Events">
      <ScreenContainer>
        <EventListContainer showsVerticalScrollIndicator={false}>
          {renderListHeader(t('thisMonth'))}
          <NoEventsLabel color="darkTransparent" fontSpacing="spaced" fontSize="small">
            {t('noAssigned')}
          </NoEventsLabel>
          {renderListHeader(t('nextMonth'))}
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
          {renderListHeader(t('Past Events'))}
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
}

export default MyEventsScreen;
