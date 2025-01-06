import { FlatList, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import ListCategories from "./ListCategories";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedId, setSelectedId] = useState<string>();

  const getDataCategories = async () => {
    try {
      const data = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );

      const json = await data.json();
      setCategories(json.categories);
    } catch (error) {
      console.error("error: ", error);
    }
  };

  useEffect(() => {
    getDataCategories();
  }, []);

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.subtitle}>Categories</Text>
      <FlatList
        data={categories}
        horizontal={true}
        renderItem={({ item }) => (
          <ListCategories
            idCat={item.idCategory}
            image={item.strCategoryThumb}
            title={item.strCategory}
          />
        )}
        keyExtractor={(item) => item.idCat}
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
