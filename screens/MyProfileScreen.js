import styled, { useTheme } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import Navigator from '../components/Navigator';
import StyledScreen from '../components/StyledScreen';
import Typography from '../components/Typography';
import ImageSelector from '../components/ImageSelector';
import Gap from '../components/Gap';
import userStore from '../stores/user.store';

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
  const logout = userStore((state) => state.logout);
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { profilePictureUrl, name } = userStore((state) => state.user);
  const { t } = useTranslation('myProfile');

  const renderListItem = (text, icon, route, action, isLast = false) => (
    <>
      <ItemContainer
        onPress={() => {
          if (route) {
            navigation.navigate(route);
          } else if (action) {
            action();
          }
        }}
      >
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
        <ImageSelector image={profilePictureUrl} editMode={false} />
        <Gap size={20} direction="vertical" />
        <Typography>{name}</Typography>
        <ListContainer>
          {/* TODO - Should direct to my events  */}
          {renderListItem(t('myEvents'), 'list', 'MyEvents')}
          {renderListItem(t('aboutTheApp'), 'information-circle-outline', 'About')}
          {renderListItem(t('terms'), 'md-newspaper-outline', 'TermsAndConditions')}
          {renderListItem(
            t('logout'),
            'exit-outline',
            '',
            () => {
              logout();
              navigation.navigate('Home');
            },
            true
          )}
        </ListContainer>
      </ScreenContainer>
      <Navigator />
    </StyledScreen>
  );
}

export default MyProfileScreen;
