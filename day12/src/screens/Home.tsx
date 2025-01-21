import { View, Text } from "react-native";
import HomeBackground from "../components/HomeBackground";
import WeatherInfo from "../components/section/WeatherInfo";
import ForecastSheet from "../components/sheet/ForecastSheet";
import WeatherTabBar from "../components/tabbar/WeatherTabBar";
import { currentWeather } from "../data/CurrentWeather";
import { ForecastSheetProvider } from "../context/ForecastSheetContext";
export default function Home() {
  return (
    <ForecastSheetProvider>
      <HomeBackground />
      <WeatherInfo />
      <ForecastSheet />
      <WeatherTabBar />
    </ForecastSheetProvider>
  );
}
