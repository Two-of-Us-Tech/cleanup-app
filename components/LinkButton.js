import styled, { useTheme } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import Typography from './Typography';
import Gap from './Gap';

const LinkButtonContainer = styled.TouchableOpacity(({ $alignSelf }) => ({
  alignSelf: $alignSelf,
  flexDirection: 'row',
  alignItems: 'center',
}));

const ButtonBorder = styled.View(({ theme: { colors }, $hideBorder, $size }) => ({
  borderBottomColor: colors.primary,
  borderBottomWidth: 2,
  ...(['extraSmall', 'small', 'regular'].includes($size) && {
    borderBottomWidth: 1,
  }),
  ...($hideBorder && {
    borderBottomColor: 'transparent',
    borderBottomWidth: 2,
  }),
}));

function LinkButton({
  children,
  onPress,
  hideBorder = false,
  alignSelf = 'auto',
  size = 'regular',
  icon,
  ...props
}) {
  const { colors } = useTheme();
  return (
    <LinkButtonContainer onPress={onPress} $alignSelf={alignSelf} {...props}>
      <ButtonBorder $size={size} $hideBorder={hideBorder}>
        <Typography fontSize={size}>{children}</Typography>
      </ButtonBorder>
      <Gap size={6} />
      {icon && <Ionicons name={icon} size={18} color={colors.primary} />}
    </LinkButtonContainer>
  );
}

export default LinkButton;
