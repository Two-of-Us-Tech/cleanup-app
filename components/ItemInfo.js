import styled, { useTheme } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import Typography from './Typography';
import Gap from './Gap';

const ItemInfoContainer = styled.TouchableOpacity(({ theme: { colors } }) => ({
  flexDirection: 'row',
  width: '100%',
  background: '#fff',
  borderRadius: '5px',
  height: '90px',
  shadowOpacity: 0.2,
  elevation: Platform.OS === 'android' ? 3 : 1,
  shadowRadius: 2,
  shadowOffset: { width: 1, height: 1 },
  shadowColor: colors.opaqueDark,
}));

const ItemDateContainer = styled.View`
  background: ${({ theme, $isDue }) => ($isDue ? '#C6C6C6' : theme.colors.tertiaryDark)};
  padding-vertical: 15px;
  padding-horizontal: 19px;
  align-items: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  justify-content: center;
`;

const LocationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
`;

const ItemDetailsContainer = styled.View`
  background: ${({ theme, $isDue }) => ($isDue ? theme.colors.tertiaryDark : theme.colors.white)};
  flex: 1;
  padding: 8px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const StyledTitle = styled(Typography)`
  width: 70%;
`;

function ItemInfo({ day, month, title, location, isEventDue, onPress }) {
  const {
    colors: { darkTransparent },
  } = useTheme();
  return (
    <ItemInfoContainer onPress={onPress}>
      <ItemDateContainer $isDue={isEventDue}>
        <Typography font="primaryBold">{day}</Typography>
        <Typography fontSize="small">{month}</Typography>
      </ItemDateContainer>
      <ItemDetailsContainer $isDue={isEventDue}>
        <StyledTitle fontSize="small" fontSpacing="spaced" numberOfLines={2}>
          {title}
        </StyledTitle>
        <Gap direction="vertical" size={12} />
        <LocationContainer>
          <Ionicons
            name="location-outline"
            size={16}
            color={darkTransparent}
            style={{ marginRight: 10 }}
          />
          <Typography fontSize="extraSmall" color="darkTransparent">
            {`${location.slice(0, 40)}...`}
          </Typography>
        </LocationContainer>
      </ItemDetailsContainer>
    </ItemInfoContainer>
  );
}

export default ItemInfo;
