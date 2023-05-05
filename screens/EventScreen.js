import styled, { useTheme } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import Toast from 'react-native-toast-message';
import { Linking, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import StyledScreen from '../components/StyledScreen';
import Typography from '../components/Typography';
import Gap from '../components/Gap';
import Button from '../components/Button';
import toastConfig from '../config/toastConfig';
import eventStore from '../stores/event.store';
import userStore from '../stores/user.store';

const ScreenContainer = styled.SafeAreaView(() => ({
  marginHorizontal: 22,
  position: 'relative',
  zIndex: -1,
  ...(Platform.OS === 'android' && {
    marginTop: 20,
  }),
}));

const ImageContainer = styled.Image(() => ({
  width: '100%',
  height: 203,
  borderRadius: 15,
  marginTop: 10,
}));

const ScrollableContent = styled.ScrollView(() => ({
  marginBottom: Platform.OS === 'android' ? 160 : 180,
}));

const EventItem = styled.View(() => ({
  flexDirection: 'row',
  alignItems: 'center',
}));

const MapContainer = styled(MapView)({
  width: '100%',
  height: 198,
  borderRadius: 15,
  marginTop: 15,
  marginBottom: 15,
});

const StyledButton = styled(Button)(() => ({
  position: 'absolute',
  alignSelf: 'center',
  bottom: 30,
  width: '90%',
}));

function EventScreen({ route, navigation }) {
  const { colors } = useTheme();
  const { t } = useTranslation('eventDetail');
  const events = eventStore((state) => state.events);
  const { user, joinEvent, isLoading, notifyDataRefresh, removeEvent, error } = userStore(
    (state) => state
  );
  const event = events.find(({ _id }) => _id === route.params.id);
  const [lat, long] = event.location.coordinates;

  const userHasJoinedEvent = user ? user.events?.some(({ _id }) => _id === event._id) : false;

  const onOpenAddress = () => {
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${lat},${long}`;
    const label = event.title;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });
    Linking.openURL(url);
  };

  useEffect(() => {
    if (notifyDataRefresh) {
      Toast.show({
        type: 'default',
        props: {
          label: t('eventUpdated'),
          iconColor: colors.primary,
          onHide: () => Toast.hide(),
          icon: 'ios-checkbox',
        },
      });
    }

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
  }, [notifyDataRefresh, error, colors, t]);

  const onJoinEvent = () => {
    if (!user) {
      navigation.navigate('AccessDenied');
    } else {
      joinEvent(event._id);
    }
  };

  return (
    <StyledScreen showBackButton={!isLoading} headerText={t('header')}>
      <Toast config={toastConfig} />
      <ScreenContainer>
        <ScrollableContent showsVerticalScrollIndicator={false}>
          <Typography fontSize="regular" font="primaryBold" fontSpacing="spaced">
            {event.title}
          </Typography>
          <ImageContainer source={{ uri: event.pictureUrl }} />

          <Gap size={20} direction="vertical" />
          <EventItem>
            <Ionicons name="calendar-outline" size={21} color="black" />
            <Gap size={10} />
            <Typography fontSize="extraSmall" color="opaqueDark" fontSpacing="spaced">
              {new Date(event.date).toLocaleDateString('default', {
                month: 'long',
                day: '2-digit',
                year: 'numeric',
              })}
            </Typography>
          </EventItem>
          <Gap size={16} direction="vertical" />
          <EventItem>
            <Ionicons name="time-outline" size={21} color="black" />
            <Gap size={10} />
            <Typography fontSize="extraSmall" color="opaqueDark" fontSpacing="spaced">
              {event.durationTime}
            </Typography>
          </EventItem>
          <Gap size={16} direction="vertical" />
          <EventItem>
            <Ionicons name="list-outline" size={21} color="black" />
            <Gap size={10} />
            <Typography fontSize="extraSmall" color="oranged" fontSpacing="spaced">
              {`${event.spotsAvailable} ${t('spots')}`}
            </Typography>
          </EventItem>
          <Gap size={16} direction="vertical" />
          <EventItem>
            <Ionicons name="location-sharp" size={21} color="black" />
            <Gap size={10} />
            <Typography fontSize="extraSmall" fontSpacing="spaced" onPress={() => onOpenAddress()}>
              {event.address}
            </Typography>
          </EventItem>
          <MapContainer
            initialRegion={{
              latitude: lat,
              longitude: long,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker coordinate={{ latitude: lat, longitude: long }} title={event.title} />
          </MapContainer>
          <Typography fontSpacing="spaced" font="primaryBold">
            {t('about')}
          </Typography>
          <Gap size={18} direction="vertical" />
          <EventItem>
            <Ionicons name="shirt-outline" size={21} color="black" />
            <Gap size={10} />
            <Typography fontSize="extraSmall" color="opaqueDark" fontSpacing="spaced">
              {event.clothingType}
            </Typography>
          </EventItem>
          <Gap size={16} direction="vertical" />
          <EventItem>
            <Ionicons name="fast-food-outline" size={21} color="black" />
            <Gap size={10} />
            <Typography fontSize="extraSmall" color="opaqueDark" fontSpacing="spaced">
              {event.foodOptions}
            </Typography>
          </EventItem>
          <Gap size={16} direction="vertical" />
          <EventItem>
            <Ionicons name="star-outline" size={21} color="black" />
            <Gap size={10} />
            <Typography fontSize="extraSmall" color="opaqueDark" fontSpacing="spaced">
              {event.experienceRequired}
            </Typography>
          </EventItem>
        </ScrollableContent>
      </ScreenContainer>
      {!userHasJoinedEvent ? (
        <StyledButton withShadow onPress={() => onJoinEvent()} loading={isLoading}>
          {t('join')}
        </StyledButton>
      ) : (
        <StyledButton
          variant="white"
          withShadow
          onPress={() => removeEvent(event._id)}
          loading={isLoading}
        >
          {t('remove')}
        </StyledButton>
      )}
    </StyledScreen>
  );
}

export default EventScreen;
