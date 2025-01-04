import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import DetailsMeal from "../screens/DetailsMeal";

export default function StackScreen() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailsMeal" component={DetailsMeal} />
    </Stack.Navigator>
  );
}
