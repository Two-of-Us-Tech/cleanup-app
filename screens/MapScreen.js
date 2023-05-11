import styled from 'styled-components/native';
import MapView, { Marker } from 'react-native-maps';
import { useEffect, useState } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { useTranslation } from 'react-i18next';
import * as Location from 'expo-location';
import Toast from 'react-native-toast-message';
import { useTheme } from 'styled-components';
import Navigator from '../components/Navigator';
import StyledScreen from '../components/StyledScreen';
import toastConfig from '../config/toastConfig';
import locationStore from '../stores/location.store';

const ScreenContainer = styled.SafeAreaView(() => ({
  flex: 1,
  marginHorizontal: 20,
  ...(Platform.OS === 'android' && {
    marginTop: 20,
  }),
}));

const StyledMap = styled(MapView)`
  height: 90%;
  width: 100%;
  margin-top: 10px;
  border-radius: 15px;
  z-index: -1;
`;

function MapScreen({ navigation }) {
  const [errorMsg, setErrorMsg] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const { colors } = useTheme();
  const { t } = useTranslation('map');
  const { events, fetchEvents } = locationStore((store) => store);

  useEffect(() => {
    if (userLocation) {
      fetchEvents(userLocation.coords.latitude, userLocation.coords.longitude);
    }
  }, [fetchEvents, userLocation]);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const userPosition = await Location.getCurrentPositionAsync({});
      setUserLocation(userPosition);
    })();
  }, []);

  useEffect(() => {
    if (errorMsg) {
      Toast.show({
        type: 'default',
        props: {
          icon: 'ios-close-circle',
          label: t('error'),
          textColor: 'oranged',
          iconColor: colors.oranged,
          onHide: () => Toast.hide(),
        },
      });
    }
  }, [errorMsg, colors.oranged, t]);

  return (
    <StyledScreen>
      <ScreenContainer>
        <Toast config={toastConfig} />
        {userLocation && events ? (
          <StyledMap
            initialRegion={{
              latitude: userLocation.coords.latitude,
              longitude: userLocation.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {events.map(({ _id: id, address, title, location: { coordinates } }) => (
              <Marker
                onCalloutPress={() => navigation.navigate('Event', { id })}
                key={id}
                coordinate={{ latitude: coordinates[0], longitude: coordinates[1] }}
                title={title}
                description={address}
              />
            ))}
          </StyledMap>
        ) : (
          <ActivityIndicator />
        )}
      </ScreenContainer>
      <Navigator />
    </StyledScreen>
  );
}

export default MapScreen;
