import { useEffect, useState } from "react";
import { View } from "react-native";
import { ItemMealCategory } from "../types/MealType";
import CustomFlatList from "../components/CustomFlatList";
import CustomItem from "../components/CustomItem";

export default function CategoryMeal(props) {
  const title = props.route.params?.title;
  const [selectedId, setSelectedId] = useState<string>();

  const [categoryMeal, setCategoryMeal] = useState<ItemMealCategory[]>([]);

  const dataCateMeal = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${title}`
    );

    const json = await data.json();

    setCategoryMeal(json.meals);
  };

  useEffect(() => {
    dataCateMeal();
  }, []);

  return (
    <View style={{ flex: 1, margin: 10 }}>
      <CustomFlatList
        data={categoryMeal}
        renderItem={({ item }) => (
          <CustomItem
            idMeal={item.idMeal}
            image={item.strMealThumb}
            title={item.strMeal}
          />
        )}
        keyExtractor={(item) => item.idMeal}
        extraData={selectedId}
        numColumns={2}
      />
    </View>
  );
}
