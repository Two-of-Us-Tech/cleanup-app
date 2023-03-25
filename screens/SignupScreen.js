import styled from "styled-components/native"
import StyledScreen from "../components/StyledScreen"
import Typography from "../components/Typography"
import { Ionicons } from "@expo/vector-icons";

const StyledContainer = styled.SafeAreaView(() => ({
  alignItems:  'center',
  marginHorizontal: 20,
  marginTop: 150
}))

const ImageContainer = styled.View(() => ({
  position: 'relative',
  marginTop: 50
}))

const ImageHolder = styled.View(() => ({
  height: 100,
  width: 100,
  background: '#ccc',
  borderRadius: 50,
}))

const StyledTouchable = styled.TouchableOpacity(({ theme: { colors } }) => ({
  position: 'absolute',
  right:10,
  bottom:0,
  padding: 5,
  borderRadius: 50,
  background: colors.primary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))


const SignupScreen = () => {
  return (
    <StyledScreen style="secondary">
      <StyledContainer>
        <Typography>Sign up by filling the form bellow</Typography>
        <ImageContainer>
          <ImageHolder />
          <StyledTouchable>
            <Ionicons name="camera-outline" size={18} color="white" />
          </StyledTouchable>
        </ImageContainer>
      </StyledContainer>
    </StyledScreen>
  )
}

export default SignupScreen