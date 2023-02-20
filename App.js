import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native";
import defaultTheme, {
  primaryFontName,
  primaryFontNameBold,
  secondaryFontName,
  secondaryFontNameBold,
} from "./theme/config";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { ThemeProvider } from "styled-components";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    [primaryFontName]: require("./assets/fonts/times-new-regular.ttf"),
    [primaryFontNameBold]: require("./assets/fonts/times-new-bold.ttf"),
    [secondaryFontName]: require("./assets/fonts/manrope-regular.ttf"),
    [secondaryFontNameBold]: require("./assets/fonts/manrope-bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
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
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
