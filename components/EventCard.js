import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';
import Gap from './Gap';
import LinkButton from './LinkButton';
import Typography from './Typography';
import ProgressIndicator from './ProgressIndicator';

const EventCardContainer = styled.View(({ theme: { colors } }) => ({
  borderRadius: 20,
  background: colors.white,
  position: 'relative',
  shadowOpacity: 0.2,
  elevation: Platform.OS === 'android' ? 3 : 1,
  shadowRadius: 6,
  shadowOffset: { width: 1, height: 2 },
  shadowColor: colors.opaqueDark,
}));

const ImageContainer = styled.Image(() => ({
  width: '100%',
  height: 139,
  borderRadius: 20,
}));

const ContentContainer = styled.View(() => ({
  paddingHorizontal: 14,
  paddingVertical: 10,
}));

const Divider = styled.View(() => ({
  height: 1,
  width: '70%',
  background: 'rgba(0, 0, 0, 0.06)',
  margin: '10px 0px',
  transform: 'translateX(-20px)',
}));

const DateContainer = styled.View(() => ({
  flexDirection: 'row',
  alignItems: 'center',
}));

const InfoContainer = styled.View(() => ({
  position: 'absolute',
  right: 18,
  bottom: 26,
  alignItems: 'center',
}));

function EventCard({ eventName, id, image }) {
  const navigation = useNavigation();

  return (
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
          <Typography fontSize="extraSmall" color="opaqueDark" fontSpacing="spaced">
            February, 14th 2023
          </Typography>
        </DateContainer>
        <Gap size={8} direction="vertical" />
        <LinkButton
          icon="arrow-forward"
          fontProps={{ fontSize: 'small' }}
          onPress={() => navigation.navigate('Event', { id })}
        >
          See Event Details
        </LinkButton>
      </ContentContainer>
      <Gap size={14} direction="vertical" />

      <InfoContainer>
        <ProgressIndicator percentage={0.75} />
        <Gap size={6} direction="vertical" />
        <Typography color="oranged" fontSize="extraSmall">
          25 spots left
        </Typography>
      </InfoContainer>
    </EventCardContainer>
  );
}

export default EventCard;
