import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ListSearch from "../components/search/ListSearch";

export default function Search() {
  const [search, setSearch] = useState<string>();
  const [mealFound, setMealFound] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    foundData();
  }, [search]);

  const foundData = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );

    const json = await data.json();

    setMealFound(json.meals);
  };

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
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
          <FlatList
            style={{ marginTop: 10 }}
            data={mealFound}
            numColumns={2}
            renderItem={({ item }) => (
              <ListSearch
                idMeal={item.idMeal}
                image={item.strMealThumb}
                title={item.strMeal}
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
