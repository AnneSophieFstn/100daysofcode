import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorite from "../screens/Favorite";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Ionicons from "@expo/vector-icons/Ionicons";
import MainStackScreen from "./StackScreen";

export default function TabMenu() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={MainStackScreen}
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
        name="SearchStack"
        component={MainStackScreen}
        initialParams={{ screen: "Search" }}
        options={{
          headerShown: false,
          title: "Search",
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
        name="FavoriteStack"
        component={MainStackScreen}
        initialParams={{ screen: "Favorite" }}
        options={{
          headerShown: false,
          title: "Favorite",
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
