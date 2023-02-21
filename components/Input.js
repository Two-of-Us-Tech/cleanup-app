import styled from "styled-components/native";

const StyledInput = styled.TextInput(({ theme: { colors }}) => ({
  textAlign:  'center',
  background: colors.inputColor,
  padding: 12,
  borderRadius: 5
}));

const Input = ({
  onChange,
  rounded = false,
  bg = "primary",
  isPassword = false,
  value = "",
  placeholder = ""
}) => {
  return (
    <StyledInput
      onChange={onChange}
      $rounded={rounded}
      $bg={bg}
      secureTextEntry={isPassword}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
