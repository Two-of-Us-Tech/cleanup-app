import styled from "styled-components/native";
import MapView, { Marker } from "react-native-maps";
import Navigator from "../components/Navigator";
import StyledScreen from "../components/StyledScreen";
import Input from "../components/Input";
import { useState } from "react";
import { Platform } from "react-native";

const ScreenContainer = styled.SafeAreaView(() => ({
  flex: 1,
  marginHorizontal: 20,
  ...Platform.OS === 'android' && {
    marginTop: 20
  }
}));

const StyledMap = styled(MapView)`
  height: 90%;
  width: 100%;
  margin-top: 10px;
  border-radius: 15px;
`;

const StyledInput = styled(Input)`
  margin-top: 16px;
`;

const MapScreen = ({ navigation }) => {
  const [location, setLocation] = useState();

  const eventData = {
    title: "Event Name",
    description: "Event Description",
  };

  const events = [
    {
      coordinate: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
    },
    {
      coordinate: {
        latitude: 37.7883,
        longitude: -122.4393,
      },
    },
    {
      coordinate: {
        latitude: 37.779,
        longitude: -122.4323,
      },
    },
    {
      coordinate: {
        latitude: 37.77,
        longitude: -122.4393,
      },
    },
  ];

  return (
    <StyledScreen>
      <ScreenContainer>
        <StyledInput
          placeholder="Find events near you"
          fullWidth
          icon='search'
          value={location}
          onChange={(value) => setLocation(value)}
        />
        <StyledMap
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {events.map((event) => (
            <Marker
              //TODO - Redirect to the right event
              onCalloutPress={() => navigation.navigate('Event')}
              key={event.coordinate.latitude}
              coordinate={event.coordinate}
              title={eventData.title}
              description={eventData.description}
            />
          ))}
        </StyledMap>
      </ScreenContainer>
      <Navigator />
    </StyledScreen>
  );
};

export default MapScreen;
