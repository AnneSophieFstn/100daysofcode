import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import Categories from "../components/categories/Categories";
import Meals from "../components/meals/Meals";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What do you want to cook Today ?</Text>

      <Categories />

      <Meals />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontWeight: 800,
    fontSize: 24,
  },

  subtitle: {
    fontWeight: 800,
    fontSize: 18,
  },
});
