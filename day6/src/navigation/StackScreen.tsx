import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import DetailsMeal from "../screens/DetailsMeal";

type RootStackParamList = {
  Home: undefined;
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
        name="DetailsMeal"
        component={DetailsMeal}
        options={{ title: "Meal" }}
      />
    </Stack.Navigator>
  );
}
