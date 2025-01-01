import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function Post() {
  const [postText, setPostText] = useState<string>();
  const navigation = useNavigation();
  return (
    <View>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: "white" }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        onPress={() => {
          // Pass params back to home screen
          navigation.popTo("Home", { post: postText });
        }}
      >
        Done
      </Button>
    </View>
  );
}
