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
import { ThemeProvider } from "styled-components/native";
import EventListScreen from "./screens/EventListScreen";
import EventScreen from "./screens/EventScreen";
import MyEventsScreen from "./screens/MyEventsScreen";
import MapScreen from "./screens/MapScreen";
import MyProfileScreen from "./screens/MyProfileScreen";

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
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            animation: "none",
            gestureEnabled: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="EventList" component={EventListScreen} />
          <Stack.Screen name="Event" component={EventScreen} />
          <Stack.Screen name="MyEvents" component={MyEventsScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="MyProfile" component={MyProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
