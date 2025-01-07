import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import DetailsMeal from "../screens/DetailsMeal";
import Search from "../screens/Search";

type RootStackParamList = {
  Home: undefined;
  Search: { mealId: string };
  DetailsMeal: { mealId: string };
};

export default function StackScreen() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ title: "Search" }}
      />
      <Stack.Screen
        name="DetailsMeal"
        component={DetailsMeal}
        options={{ title: "Meal" }}
      />
    </Stack.Navigator>
  );
}
