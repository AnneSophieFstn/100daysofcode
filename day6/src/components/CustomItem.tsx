import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ItemMealProps } from "../types/MealType";
import { useNavigation } from "@react-navigation/native";

export default function CustomItem({ idMeal, image, title }: ItemMealProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailsMeal", { idMeal })}
      style={styles.listItem}
    >
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{
          uri: `${image}`,
        }}
      />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: { flex: 1, margin: 5 },

  image: {
    borderRadius: 5,
    height: 250,
  },
  text: { fontWeight: "bold", fontSize: 16 },
});
