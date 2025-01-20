import { View, Text } from "react-native";
import { Forecast } from "../../models/Weather";
import { ScrollView } from "react-native-gesture-handler";
import ForecastCapsule from "./ForecastCapsule";

interface ForecastScrollProps {
  forecasts: Forecast[];
  capsuleRadius: number;
  capsuleHeight: number;
  capsuleWidth: number;
}

export default function ForecastScroll({
  forecasts,
  capsuleRadius,
  capsuleHeight,
  capsuleWidth,
}: ForecastScrollProps) {
  return (
    <ScrollView
      horizontal
      style={{ paddingLeft: 20, paddingTop: 20, paddingBottom: 10 }}
    >
      <View style={{ flex: 1, flexDirection: "row", gap: 12 }}>
        {forecasts.map((forecast, i) => (
          <ForecastCapsule
            width={capsuleWidth}
            height={capsuleHeight}
            radius={capsuleRadius}
            forecast={forecast}
            key={i}
          />
        ))}
      </View>
    </ScrollView>
  );
}
