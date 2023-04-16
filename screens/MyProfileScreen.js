import { useState } from 'react';
import styled, { useTheme } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import Navigator from '../components/Navigator';
import StyledScreen from '../components/StyledScreen';
import Typography from '../components/Typography';
import ImageSelector from '../components/ImageSelector';
import Gap from '../components/Gap';

const ScreenContainer = styled.SafeAreaView`
  flex: 1;
  margin-horizontal: 30px;
  align-items: center;
`;

const ListContainer = styled.View`
  margin-top: 32px;
  width: 100%;
`;

const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
`;

const ItemDivider = styled.View`
  height: 1px;
  width: 100%;
  background: ${({ theme: { colors } }) => colors.tertiaryDark};
  margin-vertical: 15px;
`;

function MyProfileScreen() {
  const [image, setImage] = useState(null);
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { t } = useTranslation('myProfile');

  const renderListItem = (text, icon, route, isLast = false) => (
    <>
      <ItemContainer onPress={() => navigation.navigate(route)}>
        <Ionicons name={icon} size={24} color={colors.opaqueDark} />
        <Gap size={12} />
        <Typography color="opaqueDark" fontSpacing="spaced">
          {text}
        </Typography>
      </ItemContainer>
      {!isLast && <ItemDivider />}
    </>
  );

  return (
    <StyledScreen variant="secondary" headerText={t('header')}>
      <ScreenContainer>
        <ImageSelector image={image} onChange={(updatedImage) => setImage(updatedImage)} />
        <Gap size={20} direction="vertical" />
        <Typography>Name Here</Typography>
        <ListContainer>
          {/* TODO - Should direct to my events  */}
          {renderListItem(t('myEvents'), 'list', 'AccessDenied')}
          {renderListItem(t('aboutTheApp'), 'information-circle-outline', 'About')}
          {renderListItem(t('terms'), 'md-newspaper-outline', 'TermsAndConditions')}
          {renderListItem(t('logout'), 'exit-outline', 'Home', true)}
        </ListContainer>
      </ScreenContainer>
      <Navigator />
    </StyledScreen>
  );
}

export default MyProfileScreen;
