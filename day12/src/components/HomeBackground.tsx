import React from "react";
import {
  Canvas,
  Rect,
  LinearGradient,
  vec,
  CanvasKitWebGLBuffer,
} from "@shopify/react-native-skia";
import {
  View,
  Image,
  ImageBackground,
  ScaledSize,
  StyleSheet,
} from "react-native";
import useApplicationDimensions from "../hooks/useApplicationDimensions";
import { useForecastSheetPosition } from "../context/ForecastSheetContext";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import BackgroundGradient from "./BackgroundGradient";

export default function HomeBackground() {
  const dimensions = useApplicationDimensions();
  const { width, height } = dimensions;
  const myStyles = styles(dimensions);
  const smokeHeight = height * 0.6;
  const smokeOffsetY = height * 0.4;
  const animatedPosition = useForecastSheetPosition();
  const AnimatedImgBkg = Animated.createAnimatedComponent(ImageBackground);
  const AnimatedCanvas = Animated.createAnimatedComponent(Canvas);
  const leftBkgColor = useSharedValue("#2E335A");
  const rightBkgColor = useSharedValue("#1C1B33");
  const bkgColors = useDerivedValue(() => {
    leftBkgColor.value = interpolateColor(
      animatedPosition.value,
      [0, 1],
      ["#2E335A", "#422E5A"]
    );
    return [leftBkgColor.value, rightBkgColor.value];
  });
  const animatedImgBkgStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animatedPosition.value,
            [0, 1],
            [0, -height],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  const animatedCanvasSmokeStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        animatedPosition.value,
        [0, 0.1],
        [1, 0],
        Extrapolation.CLAMP
      ),
    };
  });

  return (
    <View style={{ ...StyleSheet.absoluteFillObject }}>
      <BackgroundGradient colors={bkgColors} />
      <AnimatedImgBkg
        source={require("../../assets/home/Background.png")}
        resizeMode="cover"
        style={[{ height: "100%" }, animatedImgBkgStyles]}
      >
        <Animated.View
          style={[
            {
              height: smokeHeight,
              ...StyleSheet.absoluteFillObject,
              top: smokeOffsetY,
            },
            animatedCanvasSmokeStyles,
          ]}
        >
          <Canvas style={{ flex: 1 }}>
            <Rect x={0} y={0} width={width} height={smokeHeight}>
              <LinearGradient
                start={vec(width / 2, 0)}
                end={vec(width / 2, smokeHeight)}
                colors={["rgba(58,63,84,0)", "rgba(58,63,84,1)"]}
                positions={[-0.02, 0.54]}
              />
            </Rect>
          </Canvas>
        </Animated.View>
        <Image
          resizeMode="cover"
          source={require("../../assets/home/House.png")}
          style={myStyles.houseImage}
        />
      </AnimatedImgBkg>
    </View>
  );
}

const styles = ({ width }: ScaledSize) =>
  StyleSheet.create({
    houseImage: {
      width: width,
      height: width,
      ...StyleSheet.absoluteFillObject,
      top: "36%",
    },
  });
