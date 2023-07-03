import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import StyledScreen from '../components/StyledScreen';
import Typography from '../components/Typography';

const TextContainer = styled.ScrollView`
  margin-horizontal: 30px;
  margin-top: ${Platform.OS === 'android' ? '40px' : '0px'};
  margin-bottom: 20px;
`;

const StyledText = styled(Typography)`
  line-height: 21.5px;
`;

function AboutScreen() {
  const { t } = useTranslation('about');
  return (
    <StyledScreen showBackButton headerText="About the App" variant="secondary">
      <TextContainer>
        <StyledText fontSize="extraSmall" color="opaqueDark" fontSpacing="spaced" font="primary">
          {t('about')}
        </StyledText>
      </TextContainer>
    </StyledScreen>
  );
}

export default AboutScreen;
