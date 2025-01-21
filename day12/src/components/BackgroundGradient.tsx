import {
  AnimatedProp,
  Canvas,
  Color,
  LinearGradient,
  Rect,
  vec,
} from "@shopify/react-native-skia";
import { StyleSheet } from "react-native";
import useApplicationDimensions from "../hooks/useApplicationDimensions";

interface BackgroundGradientProps {
  colors?: AnimatedProp<Color[]>;
}
export default function BackgroundGradient({
  colors = ["#2E335A", "#1C1B33"],
}: BackgroundGradientProps) {
  const { width, height } = useApplicationDimensions();

  return (
    <Canvas style={{ ...StyleSheet.absoluteFillObject }}>
      <Rect x={0} y={0} width={width} height={height}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(width, height)}
          colors={colors}
        />
      </Rect>
    </Canvas>
  );
}
