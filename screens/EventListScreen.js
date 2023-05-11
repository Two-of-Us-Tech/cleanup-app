import styled from 'styled-components/native';
import { useState, useEffect, Fragment } from 'react';
import { ActivityIndicator, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDebounce } from 'use-debounce';
import StyledScreen from '../components/StyledScreen';
import Input from '../components/Input';
import EventCard from '../components/EventCard';
import Gap from '../components/Gap';
import Navigator from '../components/Navigator';
import eventListStore from '../stores/eventList.store';

const ScreenContainer = styled.SafeAreaView(() => ({
  flex: 1,
  marginHorizontal: 20,
  ...(Platform.OS === 'android' && {
    marginTop: 30,
  }),
}));

const EventListContainer = styled.ScrollView(() => ({
  marginTop: 10,
  marginBottom: Platform.OS === 'android' ? 80 : 100,
  overflow: 'visible',
}));

function EventListScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useTranslation('eventList');
  const [debouncedText] = useDebounce(searchTerm, 1000);
  const { fetchEvents, events, isLoading } = eventListStore((state) => state);

  useEffect(() => {
    if (!events) {
      fetchEvents('');
    }
  }, [fetchEvents, events]);

  useEffect(() => {
    fetchEvents(debouncedText);
  }, [debouncedText, fetchEvents]);

  return (
    <StyledScreen>
      <ScreenContainer>
        <EventListContainer showsVerticalScrollIndicator={false}>
          <Input
            placeholder={t('findEvent')}
            icon="search"
            inputProps={{
              value: searchTerm,
              onChangeText: (value) => setSearchTerm(value),
            }}
          />
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            events?.map((event, index) => (
              <Fragment key={event.id}>
                <EventCard
                  numberOfParticipants={event.numberOfParticipants}
                  // eslint-disable-next-line no-underscore-dangle
                  id={event._id}
                  date={event.date}
                  eventName={event.title}
                  spotsAvailable={event.spotsAvailable}
                  image={event.pictureUrl}
                />
                {index + 1 < events.length && <Gap size={28} direction="vertical" />}
              </Fragment>
            ))
          )}
        </EventListContainer>
      </ScreenContainer>
      <Navigator />
    </StyledScreen>
  );
}

export default EventListScreen;
