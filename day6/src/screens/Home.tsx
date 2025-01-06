import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import Categories from "../components/categories/Categories";
import Meals from "../components/meals/Meals";
import Country from "../components/country/Country";

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>What do you want to cook Today ?</Text>

        <Categories />

        <Meals />

        <Country />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
  title: {
    fontWeight: 800,
    fontSize: 30,
  },

  subtitle: {
    fontWeight: 800,
    fontSize: 18,
  },
});
