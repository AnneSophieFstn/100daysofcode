import { View, Text, StyleSheet } from "react-native";
import { Weather } from "../../models/Weather";
import { DEGREE_SYMBOL } from "../../utils/Constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface WeatherInfoProps {
  weather: Weather;
}

export default function WeatherInfo({ weather }: WeatherInfoProps) {
  const { city, temperature, condition, high, low } = weather;
  const { top } = useSafeAreaInsets();
  const weatherInfoMargin = top + 51;

  return (
    <View style={{ alignItems: "center", marginTop: weatherInfoMargin }}>
      <Text style={styles.cityText}>{city}</Text>
      <Text style={styles.temperatureText}>
        {temperature}
        {DEGREE_SYMBOL}
      </Text>
      <Text style={styles.conditionText}>{condition}</Text>
      <Text style={styles.minMaxTest}>
        H: {high}
        {DEGREE_SYMBOL} L: {low}
        {DEGREE_SYMBOL}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cityText: {
    fontFamily: "SF-Regular",
    color: "white",
    fontSize: 34,
    lineHeight: 41,
  },
  temperatureText: {
    fontFamily: "SF-Thin",
    color: "white",
    fontSize: 96,
    lineHeight: 96,
  },
  conditionText: {
    fontFamily: "SF-Semibold",
    color: "white",
    fontSize: 20,
    lineHeight: 20,
  },
  minMaxTest: {
    fontFamily: "SF-Semibold",
    color: "white",
    fontSize: 20,
    lineHeight: 20,
  },
});
