import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Profile({ navigation }) {
  useEffect(() => {
    navigation.setOptions({ headerTitle: "Profile" });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile screen</Text>
    </View>
  );
}
