import { useContext } from "react";
import { ScrollView, Text, View } from "react-native";
import { FavoriteMealContext } from "../context/FavoriteContext";
import CustomFlatList from "../components/CustomFlatList";
import CustomItem from "../components/CustomItem";

export default function Favorite() {
  const { favorites } = useContext(FavoriteMealContext);

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      {!favorites || favorites.length === 0 ? (
        <View
          style={{
            flex: 2,
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center" }}>You don't like any meals.</Text>
        </View>
      ) : (
        <View style={{ flex: 1, width: "100%", padding: 10 }}>
          <CustomFlatList
            data={favorites}
            renderItem={({ item }) => (
              <CustomItem
                idMeal={item.idMeal}
                image={item.image}
                title={item.title}
              />
            )}
            numColumns={2}
          />
        </View>
      )}
    </ScrollView>
  );
}
