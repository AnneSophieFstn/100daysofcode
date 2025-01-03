import Checkbox from "expo-checkbox";
import { StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

interface Task {
  id: number;
  name: string;
  completed: boolean;
  onToggleCompleted: (id: number) => void;
  onToggleDelete: (id: number) => void;
}

export default function ListItem({
  id,
  completed,
  name,
  onToggleCompleted,
  onToggleDelete,
}: Task) {
  return (
    <View style={styles.todo} key={id}>
      <Checkbox
        style={styles.checkbox}
        value={completed}
        onValueChange={() => onToggleCompleted(id)}
      />
      <Text style={completed ? styles.completed : null}>{name}</Text>
      <AntDesign
        name="closecircleo"
        size={20}
        color="red"
        onPress={() => onToggleDelete(id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
  },
  checkbox: {
    margin: 8,
  },

  completed: {
    textDecorationLine: "line-through",
  },
});
