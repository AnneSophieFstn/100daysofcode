import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

export default function Profile({ route }) {
  const { firstname, lastname } = route.params;

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>
        Hi, {firstname} {lastname}
      </Text>
    </View>
  );
}
