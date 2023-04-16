import styled from 'styled-components';
import { Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import StyledScreen from '../components/StyledScreen';
import Typography from '../components/Typography';

const TextContainer = styled.ScrollView`
  margin-horizontal: 32px;
  margin-bottom: 20px;
  margintop: ${Platform.OS === 'android' ? '60px' : '0px'};
`;

const StyledText = styled(Typography)`
  line-height: 21.5px;
`;

function TermsAndConditionsScreen() {
  const { t } = useTranslation('terms');
  return (
    <StyledScreen showBackButton headerText="Terms & Conditions" variant="secondary">
      <TextContainer showsVerticalScrollIndicator={false}>
        <StyledText fontSize="extraSmall" color="opaqueDark" fontSpacing="spaced" font="primary">
          {t('terms')}
        </StyledText>
      </TextContainer>
    </StyledScreen>
  );
}

export default TermsAndConditionsScreen;
