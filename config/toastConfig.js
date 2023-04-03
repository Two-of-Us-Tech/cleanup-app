import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import Typography from '../components/Typography';
import Gap from '../components/Gap';

const SuccessToastContainer = styled.View`
  position: relative;
  min-height: 68px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-horizontal: 26px;
  margin-top: 20px;
  background: ${(props) => props.theme.colors.white};
  align-items: center;
  padding: 16px;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const DismissButton = styled.TouchableOpacity`
  align-self: flex-start;
`;

const StyledTypography = styled(Typography)`
  max-width: 80%;
  margin-right: 20px;
`;

const toastConfig = {
  success: ({ props: { label, iconColor, onHide } }) => (
    <SuccessToastContainer>
      <Ionicons name="ios-checkbox" size={32} color={iconColor} />
      <Gap size={10} />
      <StyledTypography fontSize="small">{label}</StyledTypography>
      <DismissButton onPress={() => onHide()}>
        <Ionicons name="md-close" size={26} color={iconColor} />
      </DismissButton>
    </SuccessToastContainer>
  ),
};

export default toastConfig;
