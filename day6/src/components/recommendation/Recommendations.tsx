import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListRecommendation from "./ListRecommendation";
import CustomList from "../CustomList";
import ListMealSkeleton from "../skeleton/ListMealSkeleton";

export default function Recommendations() {
  const [country, setRecommendation] = useState([]);
  const [selectedId, setSelectedId] = useState<string>();
  const [loading, setLoading] = useState(true);

  const getDataRecommendation = async () => {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=f"
    );
    const json = await data.json();

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    setRecommendation(json.meals);
  };
  useEffect(() => {
    getDataRecommendation();
  }, []);

  if (loading) {
    return <ListMealSkeleton />;
  }

  return (
    <View style={{ marginTop: 15 }}>
      <Text style={styles.subtitle}>Recommendations</Text>

      <FlatList
        horizontal={true}
        data={country}
        renderItem={({ item }) => (
          <CustomList
            idMeal={item.idMeal}
            image={item.strMealThumb}
            title={item.strMeal}
            loading={loading}
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
