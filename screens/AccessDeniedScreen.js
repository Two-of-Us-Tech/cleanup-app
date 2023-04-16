import { BlurView } from 'expo-blur';
import styled from 'styled-components';
import { SafeAreaView, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import Gap from '../components/Gap';
import LinkButton from '../components/LinkButton';
import Button from '../components/Button';
import Typography from '../components/Typography';
import StyledScreen from '../components/StyledScreen';

const StyledBlur = styled(BlurView)`
  height: 100%;
  justify-content: center;
`;

const CardContainer = styled.View(({ theme: { colors } }) => ({
  shadowOpacity: 0.2,
  elevation: Platform.OS === 'android' ? 3 : 1,
  shadowRadius: 6,
  shadowOffset: { width: 1, height: 2 },
  shadowColor: colors.opaqueDark,
  marginHorizontal: 30,
  borderRadius: 5,
  background: colors.white,
  paddingHorizontal: 27,
  paddingVertical: 30,
}));

const TextContainer = styled.View`
  align-items: center;
`;

const CenteredText = styled(Typography)`
  text-align: center;
`;

const CenteredLink = styled(LinkButton)`
  align-self: center;
`;

function AccessDeniedScreen() {
  const navigation = useNavigation();
  const { t } = useTranslation('access');

  return (
    <StyledScreen>
      <StyledBlur intensity={20} tint="light">
        <SafeAreaView>
          <CardContainer>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={28} color="black" />
            </TouchableOpacity>
            <TextContainer>
              <Typography font="secondary" fontSize="xl">
                {t('title')}
              </Typography>
              <Gap size={10} direction="vertical" />
              <CenteredText color="opaquePrimary" fontSize="small" fontSpacing="spaced">
                {t('login')}
              </CenteredText>
            </TextContainer>
            <Gap size={30} direction="vertical" />
            <Button onPress={() => navigation.navigate('Signup')}>{t('sign')}</Button>
            <Gap size={10} direction="vertical" />
            <CenteredLink hideBorder size="small" onPress={() => navigation.navigate('Login')}>
              {t('haveAccount')}
            </CenteredLink>
          </CardContainer>
        </SafeAreaView>
      </StyledBlur>
    </StyledScreen>
  );
}

export default AccessDeniedScreen;
