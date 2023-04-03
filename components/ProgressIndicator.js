import { Circle } from 'react-native-progress';
import { useTheme } from 'styled-components/native';

function ProgressIndicator({ percentage }) {
  const {
    colors: { gray, primary },
    fonts: { primaryBold, extraSmall },
  } = useTheme();

  return (
    <Circle
      animated={false}
      color={primary}
      showsText
      strokeCap="round"
      thickness={5}
      allowFontScaling
      borderColor="white"
      textStyle={{ fontFamily: primaryBold, fontSize: extraSmall }}
      progress={percentage}
      size={55}
      unfilledColor={gray}
    />
  );
}

export default ProgressIndicator;
