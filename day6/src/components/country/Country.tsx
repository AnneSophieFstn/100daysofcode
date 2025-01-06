import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListCountry from "./ListCountry";

export default function Country() {
  const [country, setCountry] = useState([]);
  const [selectedId, setSelectedId] = useState<string>();

  const getDataCountry = async () => {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    );
    const json = await data.json();

    console.log("JSON: ", json);

    setCountry(json.meals);
  };
  useEffect(() => {
    getDataCountry();
  }, []);

  return (
    <View style={{ marginTop: 15 }}>
      <Text style={styles.subtitle}>Meals by country</Text>

      <FlatList
        horizontal={true}
        data={country}
        renderItem={({ item }) => <ListCountry country={item.strArea} />}
        // keyExtractor={(item) => item.idMeal}
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
