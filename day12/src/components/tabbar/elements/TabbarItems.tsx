import { View, StyleSheet, Pressable } from "react-native";
import MapIcon from "../icons/MapIcon";
import ListIcon from "../icons/ListIcon";
import TrapezoidBackground from "./TrapezoidBackground";
import useApplicationDimensions from "../../../hooks/useApplicationDimensions";
import CircleButton from "./CircleButton";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { eventEmitter } from "../../../utils/EventEmitter";
export default function TabbarItems() {
  const { width, height } = useApplicationDimensions();
  const trapezoidWidth = width * 0.68;
  const trapezoidHeight = height * 0.12;
  const circleRadius = (trapezoidWidth * 0.22) / 2;
  const buttonCenterX = width / 2 - circleRadius;

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 32,
      }}
    >
      <Pressable onPress={() => eventEmitter.emit("locationEvent")}>
        <MapIcon />
      </Pressable>
      <TrapezoidBackground width={trapezoidWidth} height={trapezoidHeight} />
      <Pressable
        style={{
          ...StyleSheet.absoluteFillObject,
          left: buttonCenterX,
          top: 12,
          width: circleRadius * 2,
          height: circleRadius * 2,
        }}
      >
        {({ pressed }) => (
          <CircleButton radius={circleRadius} pressed={pressed} />
        )}
      </Pressable>
      <Pressable onPress={() => navigation.navigate("list")}>
        <ListIcon />
      </Pressable>
    </View>
  );
}
