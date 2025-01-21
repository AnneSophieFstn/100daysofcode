import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import Home from "../screens/Home";
import WeatherList from "../screens/WeatherList";
import { useEffect } from "react";
import { eventEmitter } from "../utils/EventEmitter";
import { fetchWeatherData, getLocationData } from "../services/LocationService";
import { useWeatherData } from "../context/WeatherDataContext";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const { setWeatherData } = useWeatherData();
  const handleLocationEvent = async () => {
    const locationData = await getLocationData();
    if (locationData) {
      const { latitude, longitude } = locationData;
      const weatherData = await fetchWeatherData(latitude, longitude);
      setWeatherData(weatherData);
    }
  };
  useEffect(() => {
    const listener = eventEmitter.addListener("locationEvent", async () => {
      await handleLocationEvent();
    });
    return () => listener.remove();
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="list" component={WeatherList} />
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
}
