import { useNavigation } from "@react-navigation/native";
import { Alert, Text, View } from "react-native";
import { Button } from "@react-navigation/elements";
import { useEffect, useState } from "react";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}
