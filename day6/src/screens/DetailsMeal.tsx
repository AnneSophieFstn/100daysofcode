import { useContext, useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RecipeMeal } from "../types/MealType";
import FavoriteContext, {
  FavoriteMealContext,
} from "../context/FavoriteContext";

export default function DetailsMeal(props) {
  const idMeal = props.route.params?.idMeal;
  const [recipe, setRecipe] = useState<RecipeMeal>();
  const [ingredients, setIngredients] = useState([]);

  const { addFavorite, isLiked, isFavorite, delFavorite } =
    useContext(FavoriteMealContext);

  const fetchMealDetails = async () => {
    try {
      const data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );

      const json = await data.json();

      setRecipe(json.meals[0]);
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  const extractIngredients = () => {
    if (!recipe) return [];

    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];

      if (measure && ingredient && ingredient.trim() !== "") {
        ingredients.push({
          name: ingredient,
          measure: measure,
          image: `https://www.themealdb.com/images/ingredients/${ingredient}.png`,
        });
      }
    }

    return ingredients;
  };

  const toggleFavoriteMeal = () => {
    if (isLiked) {
      console.log("ok like");

      delFavorite(idMeal);
    } else {
      console.log("ok not like");

      addFavorite({
        idMeal: idMeal,
        image: recipe?.strMealThumb,
        title: recipe?.strMeal,
      });
    }
  };

  useEffect(() => {
    if (idMeal) {
      fetchMealDetails();
      isFavorite(idMeal);
    }
  }, [idMeal]);

  useEffect(() => {
    if (recipe) {
      const fetchedIngredients = extractIngredients();
      setIngredients(fetchedIngredients);
    }
  }, [recipe]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <TouchableOpacity
          onPress={() => toggleFavoriteMeal()}
          style={{
            position: "absolute",
            zIndex: 9999,
            top: 10,
            right: 10,
            backgroundColor: "rgba(225, 225, 225, 0.8)",
            borderRadius: 50,
            padding: 8,
          }}
        >
          <Ionicons
            name={isLiked ? "heart" : "heart-outline"}
            size={24}
            color={isLiked ? "red" : "black"}
          />
        </TouchableOpacity>
        <Image
          style={styles.imageRecipe}
          source={{
            uri: `${recipe?.strMealThumb}`,
          }}
        />
        <View
          style={{
            paddingLeft: 16,
            paddingRight: 16,
            top: -30,
            backgroundColor: "#fff",
            borderRadius: 30,
          }}
        >
          <Text
            style={{
              fontWeight: 800,
              fontSize: 22,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            {recipe?.strMeal}
          </Text>

          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginRight: 10,
              }}
            >
              <AntDesign name="book" size={18} color="gray" />
              <Text style={{ marginLeft: 5, color: "gray", fontSize: 12 }}>
                {recipe?.strCategory}
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons name="home-outline" size={17} color="gray" />
              <Text style={{ marginLeft: 5, color: "gray", fontSize: 12 }}>
                {recipe?.strArea}
              </Text>
            </View>
          </View>

          <View>
            <Text
              style={{
                fontWeight: 800,
                fontSize: 20,
                marginTop: 20,
                marginBottom: 15,
              }}
            >
              Ingredients
            </Text>

            {ingredients.map((ingredient, index) => (
              <View key={index} style={styles.ingredientContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{ uri: `${ingredient.image}` }}
                    style={styles.ingredientImage}
                  />
                  <Text style={styles.ingredientText}>{ingredient.name}</Text>
                </View>

                <View>
                  <Text style={styles.ingredientMeasure}>
                    {ingredient.measure}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          <View>
            <Text style={{ fontWeight: 800, fontSize: 20, marginTop: 5 }}>
              Instructions
            </Text>
            <Text>{recipe?.strInstructions}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageRecipe: {
    width: "100%",
    height: 300,
  },

  ingredientContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  ingredientImage: {
    borderRadius: 10,
    backgroundColor: "rgba(237, 237, 237, 1)",
    width: 50,
    height: 50,
    marginRight: 10,
  },
  ingredientText: {
    fontSize: 14,
    textTransform: "capitalize",
  },
  ingredientMeasure: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
