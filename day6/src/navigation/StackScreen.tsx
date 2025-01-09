import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import DetailsMeal from "../screens/DetailsMeal";
import Search from "../screens/Search";
import CategoryMeal from "../screens/CategoryMeal";

type RootStackParamList = {
  Home: undefined;
  Search: { idMeal: string };
  DetailsMeal: { idMeal: string };
  CategoryMeal: { title: string };
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
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen
        name="DetailsMeal"
        component={DetailsMeal}
        options={{ title: "Meal" }}
      />
      <Stack.Screen
        name="CategoryMeal"
        component={CategoryMeal}
        options={{ title: "Meal by category" }}
      />
    </Stack.Navigator>
  );
}
