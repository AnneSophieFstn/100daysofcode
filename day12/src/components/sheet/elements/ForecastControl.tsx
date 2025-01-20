import { Canvas, Line, LinearGradient, vec } from "@shopify/react-native-skia";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutChangeEvent,
} from "react-native";
import { ForecastType } from "../../../models/Weather";

interface ForecastControlProps {
  onPress: (forecastType: ForecastType) => void;
}

export default function ForecastControl({ onPress }: ForecastControlProps) {
  const [textWidth, setTextWidth] = useState(0);
  const onTextLayout = (event: LayoutChangeEvent) => {
    setTextWidth(event.nativeEvent.layout.width);
  };
  const spacingX = 32;
  const strokeWidth = 3;
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 32,
        }}
      >
        <TouchableOpacity onPress={() => onPress(ForecastType.Hourly)}>
          <Text onLayout={onTextLayout} style={styles.forecastText}>
            Hourly Forecast
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress(ForecastType.Weekly)}>
          <Text style={styles.forecastText}>Weekly Forecast</Text>
        </TouchableOpacity>
      </View>

      <Canvas
        style={{ height: strokeWidth, width: textWidth, marginLeft: spacingX }}
      >
        <Line p1={vec(0, 0)} p2={vec(textWidth, 0)} strokeWidth={strokeWidth}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(textWidth, 0)}
            colors={[
              "rgba(147,112,177,0)",
              "rgba(147,112,177,1)",
              "rgba(147,112,177,0)",
            ]}
          />
        </Line>
      </Canvas>
    </>
  );
}

const styles = StyleSheet.create({
  forecastText: {
    fontFamily: "SF-Semibold",
    fontSize: 15,
    lineHeight: 20,
    color: "rgba(235,235,245,0.6)",
  },
});
