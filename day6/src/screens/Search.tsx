import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import CustomFlatList from "../components/CustomFlatList";
import CustomItem from "../components/CustomItem";

export default function Search() {
  const [search, setSearch] = useState<string>();
  const [mealFound, setMealFound] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    foundData();
  }, [search]);

  const foundData = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );

    const json = await data.json();
    // setLoading(false);
    setMealFound(json.meals);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 8,
        flex: 1,
        paddingBottom: 20,
        // justifyContent: "center",
      }}
    >
      <View style={{ justifyContent: "flex-start" }}>
        <TextInput
          mode="outlined"
          label="Search"
          value={search}
          left={<TextInput.Icon icon="magnify" />}
          onChangeText={(text) => setSearch(text)}
          outlineStyle={{
            backgroundColor: "#fff",
            borderRadius: 50,
            borderWidth: 0.5,
          }}
        />
      </View>
      {mealFound === null ? (
        <View
          style={{
            flex: 2,
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center" }}>
            No data found. Do your research.
          </Text>
        </View>
      ) : (
        <View>
          <CustomFlatList
            style={{ marginTop: 10 }}
            data={mealFound}
            numColumns={2}
            renderItem={({ item }) => (
              <CustomItem
                idMeal={item.idMeal}
                image={item.strMealThumb}
                title={item.strMeal}
                loading={loading}
              />
            )}
          />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 5,
    width: 200,
    height: 250,
  },
});
