import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { useState } from 'react';
import Typography from './Typography';
import Gap from './Gap';

const StyledInput = styled.TextInput(() => ({
  flex: 1,
  padding: 12,
  fontSize: 16,
}));

const InputContainer = styled.View(({ theme: { colors }, $error }) => ({
  background: colors.inputColor,
  border: '1px solid transparent',
  borderRadius: 5,
  flexDirection: 'row',
  alignItems: 'center',
  ...($error && {
    borderColor: colors.orange,
  }),
}));

const IconContainer = styled.View(() => ({
  marginHorizontal: 10,
}));

const IconButton = styled.TouchableOpacity(() => ({
  transform: 'translateX(-20px)',
}));

function Input({
  onChange,
  isPassword,
  value = '',
  placeholder = '',
  icon,
  buttonIcon,
  inputProps,
  error,
  gapSize,
  ...props
}) {
  const { colors } = useTheme();
  const [secureEntry, setSecureEntry] = useState(isPassword);

  return (
    <>
      <InputContainer $error={error} {...props}>
        {icon && (
          <IconContainer>
            <Ionicons name={icon} size={20} color={colors.primary} />
          </IconContainer>
        )}
        <StyledInput
          onChange={onChange}
          secureTextEntry={secureEntry}
          value={value}
          placeholder={placeholder}
          {...inputProps}
        />
        {isPassword && (
          <IconButton onPress={() => setSecureEntry(!secureEntry)}>
            <Ionicons
              name={secureEntry ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color={colors.primary}
            />
          </IconButton>
        )}
      </InputContainer>
      <Typography fontSize="extraSmall" color="oranged">
        {error || ''}
      </Typography>
      {gapSize && <Gap size={gapSize} direction="vertical" />}
    </>
  );
}

export default Input;
