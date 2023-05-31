import styled from 'styled-components/native';
import { ActivityIndicator, Platform } from 'react-native';
import Toast from 'react-native-toast-message';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { useTheme } from 'styled-components';
import { useIsFocused } from '@react-navigation/native';
import Navigator from '../components/Navigator';
import StyledScreen from '../components/StyledScreen';
import Gap from '../components/Gap';

import Typography from '../components/Typography';
import ItemInfo from '../components/ItemInfo';
import myEventsStore from '../stores/myEvents.store';
import toastConfig from '../config/toastConfig';

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
function MyEventsScreen({ navigation }) {
  const { t } = useTranslation('myEvents');
  const { events, isLoading, error, fetchEvents } = myEventsStore((state) => state);
  const isFocused = useIsFocused();
  const { colors } = useTheme();

  useEffect(() => {
    if (isFocused) {
      fetchEvents();
    }
  }, [fetchEvents, isFocused]);

  useEffect(() => {
    if (error) {
      Toast.show({
        type: 'default',
        props: {
          label: t('error'),
          textColor: 'oranged',
          iconColor: colors.oranged,
          onHide: () => Toast.hide(),
          icon: 'ios-close-circle',
        },
      });
    }
  }, [error, t, colors]);

  const renderListHeader = (title) => (
    <ListHeader>
      <Typography font="primaryBold" fontSpacing="spaced">
        {title}
      </Typography>
      <Gap size={10} />
      <Divider />
    </ListHeader>
  );

  const renderSection = (sectionTitle, sectionEvents, isEventDue = false) => (
    <>
      {renderListHeader(sectionTitle)}
      {!sectionEvents || !sectionEvents?.length ? (
        <NoEventsLabel color="darkTransparent" fontSpacing="spaced" fontSize="small">
          {t('noAssigned')}
        </NoEventsLabel>
      ) : (
        sectionEvents.map((event) => {
          const month = new Date(event.date).getMonth();
          const day = new Date(event.date).getDate();

          return (
            <>
              <ItemInfo
                isEventDue={isEventDue}
                day={day}
                month={t(month)}
                location={event.address}
                title={event.title}
                onPress={() => navigation.navigate('Event', { id: event._id })}
              />
              <Gap size={10} direction="vertical" />
            </>
          );
        })
      )}
    </>
  );

  return (
    <StyledScreen headerText="My Events">
      <Toast config={toastConfig} />
      {isLoading || !events || error ? (
        <ActivityIndicator />
      ) : (
        <ScreenContainer>
          <EventListContainer showsVerticalScrollIndicator={false}>
            {renderSection(t('thisMonth'), events.currentEvents)}
            {renderSection(t('nextMonth'), events.futureEvents)}
            {renderSection(t('Past Events'), events.pastEvents, true)}
          </EventListContainer>
        </ScreenContainer>
      )}
      <Navigator />
    </StyledScreen>
  );
}

export default MyEventsScreen;
