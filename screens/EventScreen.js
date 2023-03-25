import styled from "styled-components/native";
import StyledScreen from "../components/StyledScreen";
import Typography from "../components/Typography";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import exampleImage from "../assets/images/example.jpeg";
import Gap from "../components/Gap";
import Button from "../components/Button";
import MapView, { Marker } from "react-native-maps";

const ScreenContainer = styled.SafeAreaView(() => ({
  marginHorizontal: 22,
  position: "relative",
}));

const StyledTitle = styled(Typography)(() => ({
  textAlign: "center",
  marginBottom: 20,
}));

const ImageContainer = styled.Image(() => ({
  width: "100%",
  height: 203,
  borderRadius: 15,
  marginTop: 10,
}));

const ScrollableContent = styled.ScrollView(() => ({
  marginTop: 0,
  marginBottom: 80,
}));

const EventItem = styled.View(() => ({
  flexDirection: "row",
  alignItems: "center",
}));

const MapContainer = styled(MapView)({
  width: "100%",
  height: 198,
  borderRadius: 15,
  marginTop: 15,
  marginBottom: 15,
});

const StyledButton = styled(Button)(() => ({
  position: "absolute",
  alignSelf: "center",
  bottom: 30,
  width: "90%",
}));

const EventScreen = ({ route: { params }, navigation }) => {
  return (
    <StyledScreen>
      <ScreenContainer>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <ScrollableContent>
          <StyledTitle color="opaqueDark" fontSpacing="spaced">
            Event Details
          </StyledTitle>
          <Typography
            fontSize="regular"
            font="primaryBold"
            fontSpacing="spaced"
          >
            Coco Beach Cleanup
          </Typography>
          <ImageContainer source={exampleImage} />

          <Gap size={20} direction="vertical" />
          <EventItem>
            <Ionicons name="calendar-outline" size={21} color="black" />
            <Gap size={10} />
            <Typography
              fontSize="extraSmall"
              color="opaqueDark"
              fontSpacing="spaced"
            >
              February, 14th 2023
            </Typography>
          </EventItem>
          <Gap size={16} direction="vertical" />
          <EventItem>
            <Ionicons name="time-outline" size={21} color="black" />
            <Gap size={10} />
            <Typography
              fontSize="extraSmall"
              color="opaqueDark"
              fontSpacing="spaced"
            >
              12pm to 5pm
            </Typography>
          </EventItem>
          <Gap size={16} direction="vertical" />
          <EventItem>
            <Ionicons name="list-outline" size={21} color="black" />
            <Gap size={10} />
            <Typography
              fontSize="extraSmall"
              color="oranged"
              fontSpacing="spaced"
            >
              20 spots available
            </Typography>
          </EventItem>
          <Gap size={16} direction="vertical" />
          <EventItem>
            <Ionicons name="location-sharp" size={21} color="black" />
            <Gap size={10} />
            <Typography fontSize="extraSmall" fontSpacing="spaced">
              Cocoa’s Beach, 1 Ocean Pkwy Wantahg, Ny 11793ss
            </Typography>
          </EventItem>
          <MapContainer
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
              title="Coco Beach Cleanup"
            />
          </MapContainer>
          <Typography fontSpacing="spaced" font="primaryBold">
            About the Event
          </Typography>
          <Gap size={18} direction="vertical" />
          <EventItem>
            <Ionicons name="shirt-outline" size={21} color="black" />
            <Gap size={10} />
            <Typography
              fontSize="extraSmall"
              color="opaqueDark"
              fontSpacing="spaced"
            >
              Comfortable clothes (gloves and boots if you have some!)
            </Typography>
          </EventItem>
          <Gap size={16} direction="vertical" />
          <EventItem>
            <Ionicons name="fast-food-outline" size={21} color="black" />
            <Gap size={10} />
            <Typography
              fontSize="extraSmall"
              color="opaqueDark"
              fontSpacing="spaced"
            >
              We offer lunch and snacks
            </Typography>
          </EventItem>
          <Gap size={16} direction="vertical" />
          <EventItem>
            <Ionicons name="star-outline" size={21} color="black" />
            <Gap size={10} />
            <Typography
              fontSize="extraSmall"
              color="opaqueDark"
              fontSpacing="spaced"
            >
              No experience needed
            </Typography>
          </EventItem>
        </ScrollableContent>
      </ScreenContainer>
      <StyledButton variant="rounded" withShadow>
        Join this Event
      </StyledButton>
    </StyledScreen>
  );
};

export default EventScreen;
