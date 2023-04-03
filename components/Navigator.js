import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Platform } from 'react-native';
import routes from '../config/routes';

const NavigatorContainer = styled.View(() => ({
  position: 'absolute',
  bottom: 30,
  zIndex: 2,
  paddingHorizontal: 20,
  overflow: 'visible',
  width: '100%',
}));

const TabsContainer = styled.View(({ theme: { colors } }) => ({
  background: colors.barColor,
  paddingHorizontal: 10,
  justifyContent: 'space-around',
  flexDirection: 'row',
  borderRadius: 100,
  shadowColor: colors.opaqueDark,
  shadowOpacity: 0.2,
  elevation: Platform.OS === 'android' ? 3 : 1,
  shadowRadius: 6,
  shadowOffset: { width: 1, height: 2 },
}));

const TabButton = styled.TouchableOpacity(({ $selected, theme: { colors } }) => ({
  height: '100%',
  position: 'relative',
  padding: 15,
  borderTopColor: $selected ? colors.dark : 'transparent',
  borderTopWidth: 2,
}));

function Navigator() {
  const {
    colors: { dark, disableColor },
  } = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedRoute, setSelectedRoute] = useState(route.name);

  useEffect(() => {
    setSelectedRoute(route.name);
  }, [route.name]);

  return (
    <NavigatorContainer>
      <TabsContainer>
        {routes.map(({ icon, route: routeName }) => (
          <TabButton
            key={routeName}
            onPress={() => {
              if (routeName !== selectedRoute) {
                navigation.navigate(routeName);
              }
            }}
            $selected={selectedRoute === routeName}
          >
            <Ionicons
              name={icon}
              size={24}
              color={selectedRoute === routeName ? dark : disableColor}
            />
          </TabButton>
        ))}
      </TabsContainer>
    </NavigatorContainer>
  );
}

export default Navigator;
