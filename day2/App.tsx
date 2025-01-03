import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ListItem from "./components/ListItem";

export default function App() {
  useEffect(() => {
    getData();
  }, []);

  const [todo, onChangeTodo] = useState<string>("");

  const [tasks, setTasks] = useState([]);

  const addData = async (value: string) => {
    try {
      const newTodo = { id: Date.now(), name: value, completed: false };

      // Ajout de la nouvelle tâche au tableau existant
      const updatedTasks = [...tasks, newTodo];
      setTasks(updatedTasks);

      await AsyncStorage.setItem("my-key", JSON.stringify(updatedTasks));
      onChangeTodo("");
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem("my-key");
      if (data !== null) {
        const parsedTodos = JSON.parse(data);

        // Vérifiez que parsedTodos est un tableau avant de le définir
        if (Array.isArray(parsedTodos)) {
          setTasks(parsedTodos);
        } else {
          setTasks([parsedTodos]); // En cas de problème, le mettre dans un tableau
        }
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const completeTodo = async (id: number) => {
    try {
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );

      setTasks(updatedTasks);
      await AsyncStorage.setItem("my-key", JSON.stringify(updatedTasks));
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      const destroyTodo = tasks.filter((task) => task.id !== id);
      setTasks(destroyTodo);

      await AsyncStorage.setItem("my-key", JSON.stringify(destroyTodo));
    } catch (error) {
      console.log(error);
    }
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

        <TouchableOpacity onPress={() => addData(todo)} style={styles.button}>
          <Text style={styles.color}>Add</Text>
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <ListItem
              id={item.id}
              completed={item.completed}
              name={item.name}
              onToggleCompleted={completeTodo}
              onToggleDelete={deleteTodo}
            />
          )}
          keyExtractor={(item) => item.id}
        />
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
});
