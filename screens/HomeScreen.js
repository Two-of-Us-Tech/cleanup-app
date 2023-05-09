import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeImageHome from '../assets/images/login-image.png';
import Button from '../components/Button';
import Gap from '../components/Gap';
import LinkButton from '../components/LinkButton';
import Typography from '../components/Typography';
import userStore from '../stores/user.store';

const HomeScreenContainer = styled.SafeAreaView(({ theme: { colors } }) => ({
  flex: 1,
  position: 'relative',
  background: colors.white,
  alignItems: 'center',
  justifyContent: 'center',
}));

const HomeImage = styled.Image(() => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: 488,
  height: 400,
  zIndex: -1,
}));

const ContentContainer = styled.View(() => ({
  marginBottom: 220,
  alignItems: 'center',
}));

const ButtonsContainer = styled.View(() => ({
  marginTop: 55,
  alignItems: 'center',
}));

const TextContainer = styled.View(() => ({
  display: 'flex',
  gap: 10,
  alignItems: 'center',
  marginHorizontal: 10,
}));

function HomeScreen({ navigation }) {
  const { t } = useTranslation('home');
  const [storedUser, setStoredUser] = useState();
  const setCachedUser = userStore((store) => store.setCachedUser);

  useEffect(() => {
    const fetchLoggedUser = async () => {
      const user = await AsyncStorage.getItem('user');
      setStoredUser(user);
    };

    fetchLoggedUser();
  }, []);

  useEffect(() => {
    if (storedUser) {
      setCachedUser(JSON.parse(storedUser));
      navigation.navigate('MyEvents');
    }
  }, [storedUser, navigation, setCachedUser]);

  return (
    <HomeScreenContainer>
      <ContentContainer>
        <TextContainer>
          <Typography font="secondary" fontSize="xl">
            {t('title')}
          </Typography>
          <Gap size={15} direction="vertical" />
          <Typography color="opaquePrimary" textAlign="center">
            {t('subTitle')}
          </Typography>
        </TextContainer>
        <ButtonsContainer>
          <Button onPress={() => navigation.navigate('Login')}>{t('login')}</Button>
          <Gap size={12} direction="vertical" />
          <LinkButton alignSelf="center" onPress={() => navigation.navigate('EventList')}>
            {t('find')}
          </LinkButton>
        </ButtonsContainer>
      </ContentContainer>
      <HomeImage source={HomeImageHome} />
    </HomeScreenContainer>
  );
}

export default HomeScreen;
