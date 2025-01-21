import { View, StyleSheet } from "react-native";
import ArcComponent from "./elements/ArcComponent";
import useApplicationDimensions from "../../hooks/useApplicationDimensions";
import TabbarItems from "./elements/TabbarItems";
import { BlurView } from "expo-blur";
import { useForecastSheetPosition } from "../../context/ForecastSheetContext";
import { interpolate } from "@shopify/react-native-skia";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
export default function WeatherTabBar() {
  const TabbarHeight = 88;
  const { width, height } = useApplicationDimensions();
  const animatedPosition = useForecastSheetPosition();

  const animatedViewStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animatedPosition.value,
            [0, 1],
            [0, TabbarHeight + 20]
          ),
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        { ...StyleSheet.absoluteFillObject, top: height - TabbarHeight },
        animatedViewStyles,
      ]}
    >
      <BlurView
        intensity={50}
        tint="dark"
        style={{
          flex: 1,
          ...StyleSheet.absoluteFillObject,
          height: TabbarHeight,
        }}
      >
        <ArcComponent height={TabbarHeight} width={width} />
        <TabbarItems />
      </BlurView>
    </Animated.View>
  );
}
