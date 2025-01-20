import { View, StyleSheet } from "react-native";
import ArcComponent from "./elements/ArcComponent";
import useApplicationDimensions from "../../hooks/useApplicationDimensions";
import TabbarItems from "./elements/TabbarItems";
import { BlurView } from "expo-blur";
export default function WeatherTabBar() {
  const TabbarHeight = 88;
  const { width, height } = useApplicationDimensions();
  return (
    <BlurView
      intensity={50}
      tint="dark"
      style={{
        flex: 1,
        ...StyleSheet.absoluteFillObject,
        height: TabbarHeight,
        top: height - TabbarHeight,
      }}
    >
      <ArcComponent height={TabbarHeight} width={width} />
      <TabbarItems />
    </BlurView>
  );
}
