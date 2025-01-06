import { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
type RecipeMeal = {
  idMeal: string | null;
  strMeal: string | null;
  strDrinkAlternate: string | null;
  strCategory: string | null;
  strArea: string | null;
  strInstructions: string | null;
  strMealThumb: string | null;
  strTags: string | null;
  strYoutube: string | null;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strIngredient16: string | null;
  strIngredient17: string | null;
  strIngredient18: string | null;
  strIngredient19: string | null;
  strIngredient20: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strMeasure16: string | null;
  strMeasure17: string | null;
  strMeasure18: string | null;
  strMeasure19: string | null;
  strMeasure20: string | null;
  strSource: string | null;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
};

export default function DetailsMeal(props) {
  const idMeal = props.route.params?.idMeal;

  const [recipe, setRecipe] = useState<RecipeMeal>();

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

      if (ingredient && ingredient.trim() !== "") {
        const gramMeasure = measure.match(/\d+\s*g/i); // Cherche un nombre suivi de "g"

        if (gramMeasure) {
          ingredients.push({
            name: ingredient,
            measure: gramMeasure[0].trim(), // Extraire "200g" par exemple
            image: `https://www.themealdb.com/images/ingredients/${ingredient}.png`,
          });
        }
      }
    }
    console.log("INGREDIENTS: ", ingredients);

    return ingredients;
  };

  const ingredients = extractIngredients();

  useEffect(() => {
    fetchMealDetails();
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
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
            <Ionicons name="home-outline" size={17} color="gray" />{" "}
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
                  source={{ uri: ingredient.image }}
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
