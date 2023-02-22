import styled from "styled-components/native";
import Typography from "./Typography";

const DividerBorder = styled.View(({ theme: { colors } }) => ({
  height: 1,
  background: colors.darkTransparent,
  width: "100%",
}));

const DividerContainer = styled.View(() => ({
  margin: 35,
  width: "100%",
  position: "relative",
}));

const TextContainer = styled.View(() => ({
  position: "absolute",
  alignSelf: 'center',
  bottom: -9,
  zIndex: 1,
  background: 'white'
}));

const Divider = ({ dividerText }) => {
  return (
    <DividerContainer>
      {dividerText && (
        <TextContainer>
          <Typography fontSize="extraSmall">{dividerText}</Typography>
        </TextContainer>
      )}
      <DividerBorder />
    </DividerContainer>
  );
};

export default Divider;
