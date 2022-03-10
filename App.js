import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScoreProvider from "./context/ScoreProvider";
import HomeScreen from "./pages/Home/HomeScreen";
import PlayScreen from "./pages/Play/PlayScreen";
import ResultsScreen from "./pages/Results/ResultsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ScoreProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Results">
          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}
            component={HomeScreen}
          />
          <Stack.Screen
            name="Play"
            options={{
              headerShown: false,
            }}
            component={PlayScreen}
          />
          <Stack.Screen
            name="Results"
            options={{
              headerShown: false,
            }}
            component={ResultsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ScoreProvider>
  );
}