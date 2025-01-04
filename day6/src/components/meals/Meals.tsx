import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListMeals from "./ListMeals";

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [selectedId, setSelectedId] = useState<string>();

  const getDataMeals = async () => {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
    );
    const json = await data.json();

    setMeals(json.meals);
  };
  useEffect(() => {
    getDataMeals();
  }, []);

  return (
    <View style={{ marginTop: 30 }}>
      <Text style={styles.subtitle}>Meals</Text>

      <FlatList
        horizontal={true}
        data={meals}
        renderItem={({ item }) => (
          <ListMeals
            idMeal={item.idMeal}
            image={item.strMealThumb}
            title={item.strMeal}
            tags={item.strTags}
          />
        )}
        keyExtractor={(item) => item.idMeal}
        extraData={selectedId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontWeight: 800,
    fontSize: 18,
  },
});
