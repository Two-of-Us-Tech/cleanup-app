import { useFonts } from "expo-font";
import defaultTheme, {
  primaryFontName,
  primaryFontNameBold,
  secondaryFontName,
} from "./theme/config";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import { ThemeProvider } from "styled-components";
import EventListScreen from "./screens/EventListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    [primaryFontName]: require("./assets/fonts/manrope-bold.ttf"),
    [primaryFontNameBold]: require("./assets/fonts/manrope-extrabold.ttf"),
    [secondaryFontName]: require("./assets/fonts/times-new-bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EventList"
            component={EventListScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
