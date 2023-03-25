import styled from "styled-components/native";

const StyledInput = styled.TextInput(({ $rounded, theme: { colors } }) => ({
  textAlign: "center",
  background: colors.inputColor,
  padding: 12,
  borderRadius: 5,
  ...($rounded && {
    borderRadius: 20,
  }),
}));

const SearchContainer = styled.View(({ $fullWidth }) => ({
  ...($fullWidth && {
    width: "100%",
  }),
  position: "relative",
}));

const IconContainer = styled.View(() => ({
  position: "absolute",
  left: 15,
  top: 10,
}));

const Input = ({
  onChange,
  rounded = false,
  bg = "primary",
  isPassword = false,
  value = "",
  placeholder = "",
  fullWidth = false,
  icon,
  ...props
}) => {

  return (
    <SearchContainer $fullWidth={fullWidth} {...props}>
      <StyledInput
        onChange={onChange}
        $rounded={rounded}
        $bg={bg}
        secureTextEntry={isPassword}
        value={value}
        placeholder={placeholder}
      />
      {icon && (
        <IconContainer>
          {icon}
        </IconContainer>
      )}
    </SearchContainer>
  );
};

export default Input;
