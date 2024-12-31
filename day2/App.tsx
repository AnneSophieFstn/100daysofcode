import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Checkbox from "expo-checkbox";

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

export default function App() {
  const [todo, onChangeTodo] = useState<string>("");
  const [isChecked, setChecked] = useState<boolean>(false);

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: "Todo 1", completed: false },
    { id: 2, name: "Todo 2", completed: true },
    { id: 3, name: "Todo 3", completed: false },
  ]);

  const addTodo = (inputText: string) => {
    console.log("TEXT INPUT: ", inputText);

    if (inputText.length == 0) {
      Alert.alert("Attention", "You need to write something", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }

    const newTodo = { id: Date.now(), name: inputText, completed: false };
    setTasks([...tasks, newTodo]);
    onChangeTodo("");
    console.log("TASKS: ", tasks);
  };

  const completeTodo = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    // console.log("TODO COMPLETED LIST: ", tasks);
  };

  const delTodo = (id: number) => {
    console.log("DEL TODO ID: ", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Todo List</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTodo}
          value={todo}
          placeholder="New task"
        />
        <TouchableOpacity onPress={() => addTodo(todo)} style={styles.button}>
          <Text style={styles.color}>Add</Text>
        </TouchableOpacity>
      </View>

      <View>
        {tasks.map((task) => (
          <View style={styles.todo} key={task.id}>
            <Checkbox
              style={styles.checkbox}
              value={task.completed}
              onValueChange={() => completeTodo(task.id)}
            />
            <Text style={task.completed ? styles.completed : null}>
              {task.name}
            </Text>
            <AntDesign
              name="closecircleo"
              size={20}
              color="red"
              onPress={() => delTodo(task.id)}
            />
          </View>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 800,
    paddingTop: 10,
  },
  input: {
    height: 40,
    marginTop: 12,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
  },
  color: {
    color: "white",
  },
  button: {
    backgroundColor: "black",
    alignItems: "center",
    padding: 15,
  },
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
