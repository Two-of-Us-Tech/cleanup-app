import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import * as ImagePicker from 'expo-image-picker';

const ImageContainer = styled.View(({ theme: { colors } }) => ({
  position: 'relative',
  marginTop: 50,
  border: `1px solid ${colors.tertiaryDark}`,
  borderRadius: 100,
  padding: 10,
}));

const StyledTouchable = styled.TouchableOpacity(({ theme: { colors } }) => ({
  position: 'absolute',
  right: 10,
  bottom: 0,
  padding: 5,
  borderRadius: 50,
  background: colors.primary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const imageProps = {
  height: 100,
  width: 100,
  borderRadius: 50,
};

const UserImage = styled.Image(() => ({
  ...imageProps,
}));

const ImageHolder = styled.View(() => ({
  ...imageProps,
  background: '#ccc',
}));

function ImageSelector({ onChange, image }) {
  const { colors } = useTheme();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      onChange(result.assets[0].uri);
    }
  };

  return (
    <ImageContainer>
      {image ? <UserImage source={{ uri: image }} /> : <ImageHolder />}
      <StyledTouchable onPress={pickImage}>
        <Ionicons name="camera-outline" size={18} color={colors.white} />
      </StyledTouchable>
    </ImageContainer>
  );
}

export default ImageSelector;
