import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Typography from './Typography';

const ScreenContainer = styled.View(({ theme: { colors } }) => ({
  flex: 1,
  position: 'relative',
  overflow: 'hidden',
  background: colors.white,
}));

const CircleTwo = styled.View(({ theme: { colors } }) => ({
  position: 'absolute',
  width: 432,
  height: 417,
  borderRadius: 1000,
  top: -20,
  left: -150,
  background: colors.secondary,
  zIndex: -1,
}));

const CircleOne = styled.View(({ theme: { colors } }) => ({
  position: 'absolute',
  width: 468,
  height: 474,
  zIndex: -1,
  top: -20,
  right: -200,
  borderRadius: 1000,
  background: colors.tertiary,
}));

const SecondaryItemContainer = styled.View(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
}));

const SecondaryCircle = styled.View(({ theme: { colors } }) => ({
  position: 'absolute',
  bottom: 0,
  zIndex: -1,
  height: '82%',
  width: 700,
  background: colors.tertiary,
  borderTopLeftRadius: 1000,
  borderTopRightRadius: 1000,
}));

const HeaderContainer = styled.SafeAreaView`
  margin-top: 20px;
  flex-direction: row;
  justify-content: center;
`;

const StyledIconButton = styled.TouchableOpacity`
  position: absolute;
  left: 26px;
  top: -2px;
  z-index: 1;
`;

function StyledScreen({ children, variant = 'default', headerText, showBackButton, ...props }) {
  const navigate = useNavigation();

  return (
    <ScreenContainer {...props}>
      {variant === 'default' && (
        <>
          <CircleOne />
          <CircleTwo />
        </>
      )}
      {variant === 'secondary' && (
        <SecondaryItemContainer>
          <SecondaryCircle />
        </SecondaryItemContainer>
      )}

      {(showBackButton || headerText) && (
        <SafeAreaView>
          <HeaderContainer>
            {showBackButton && (
              <StyledIconButton onPress={() => navigate.goBack()}>
                <Ionicons name="arrow-back" size={28} color="black" />
              </StyledIconButton>
            )}
            {headerText && (
              <Typography color="opaqueDark" font="primaryBold" fontSpacing="spaced">
                {headerText}
              </Typography>
            )}
          </HeaderContainer>
        </SafeAreaView>
      )}
      {children}
    </ScreenContainer>
  );
}

export default StyledScreen;
