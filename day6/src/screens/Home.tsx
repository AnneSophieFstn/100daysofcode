import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import Categories from "../components/categories/Categories";
import Meals from "../components/meals/Meals";
import Recommendation from "../components/recommendation/Recommendations";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>What do you want to cook Today ?</Text>

        <Categories />

        <Meals />

        <Recommendation />
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
