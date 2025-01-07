import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorite from "../screens/Favorite";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Ionicons from "@expo/vector-icons/Ionicons";
import StackScreen from "./StackScreen";

export default function TabMenu() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={StackScreen}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={StackScreen}
        initialParams={{ screen: "Search" }}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
