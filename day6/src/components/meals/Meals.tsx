import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListMeals from "./ListMeals";
import CustomFlatList from "../CustomFlatList";
import { RecipeMeal } from "../../types/MealType";

export default function Meals() {
  const [meals, setMeals] = useState<RecipeMeal[]>([]);
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
    <View style={{ marginTop: 15 }}>
      <Text style={styles.subtitle}>Meals</Text>

      <CustomFlatList
        horizontal={true}
        data={meals}
        renderItem={({ item }) => (
          <ListMeals
            idMeal={item.idMeal}
            image={item.strMealThumb}
            title={item.strMeal}
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
    fontSize: 20,
  },
});
