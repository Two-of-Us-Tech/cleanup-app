import styled, { useTheme } from "styled-components/native";
import Gap from "./Gap";
import LinkButton from "./LinkButton";
import Typography from "./Typography";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import ProgressIndicator from "./ProgressIndicator";
import { Shadow } from "react-native-shadow-2";
import { useNavigation } from "@react-navigation/native";

const EventCardContainer = styled.View(({ theme: { colors } }) => ({
  borderRadius: 20,
  background: colors.white,
  position: "relative",
}));

const ImageContainer = styled.Image(() => ({
  width: "100%",
  height: 139,
  borderRadius: 20,
}));

const ContentContainer = styled.View(() => ({
  paddingHorizontal: 14,
  paddingVertical: 10,
}));

const Divider = styled.View(() => ({
  height: 1,
  width: "70%",
  background: "rgba(0, 0, 0, 0.06)",
  margin: "10px 0px",
  transform: "translateX(-20px)",
}));

const DateContainer = styled.View(() => ({
  flexDirection: "row",
  alignItems: "center",
}));

const ActivityContainer = styled.View(() => ({
  position: "absolute",
  right: 18,
  bottom: 26,
  alignItems: "center",
}));

const EventCard = ({ eventName, date, id, spotsLeft, image }) => {
  const { colors } = useTheme();
  const navigation = useNavigation()

  return (
    <Shadow distance={6} stretch style={{ borderRadius: 20}}>
      <EventCardContainer>
        <ImageContainer source={image} />
        <ContentContainer>
          <Typography font="primaryBold" fontSpacing="spaced">
            {eventName}
          </Typography>
          <Divider />
          <DateContainer>
            <Ionicons name="calendar-outline" size={16} />
            <Gap size={4} />
            <Typography
              fontSize="extraSmall"
              color="opaqueDark"
              fontSpacing="spaced"
            >
              February, 14th 2023
            </Typography>
          </DateContainer>
          <Gap size={8} direction="vertical" />
          <LinkButton
            icon={
              <Ionicons name="arrow-forward" size={18} color={colors.primary} />
            }
            alignSelf="start"
            fontProps={{ fontSize: "small" }}
            onPress={() => navigation.navigate('Event', { id })}
          >
            See Event Details
          </LinkButton>
        </ContentContainer>
        <Gap size={14} direction="vertical" />

        <ActivityContainer>
          <ProgressIndicator percentage={0.75} />
          <Gap size={6} direction="vertical" />
          <Typography color="oranged" fontSize="extraSmall">
            25 spots left
          </Typography>
        </ActivityContainer>
      </EventCardContainer>
    </Shadow>
  );
};

export default EventCard;
