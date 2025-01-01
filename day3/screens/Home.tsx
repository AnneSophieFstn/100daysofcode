import { useNavigation } from "@react-navigation/native";
import { Alert, Text, View } from "react-native";
import { Button } from "@react-navigation/elements";
import { useEffect, useState } from "react";

export default function Home({ route }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params?.post) {
      Alert.alert("New post: " + route.params?.post);
    }
  }, []);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>

      <Text>Data post: {route.params?.post}</Text>
      <Button onPress={() => navigation.navigate("Post")}>Create a post</Button>

      <Button
        onPress={() =>
          navigation.navigate("Profile", {
            firstname: "John",
            lastname: "Doe",
          })
        }
      >
        Go to Profile
      </Button>
    </View>
  );
}
