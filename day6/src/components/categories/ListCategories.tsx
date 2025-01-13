import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ItemCategoryProps } from "../../types/CategoryType";
import { useNavigation } from "@react-navigation/native";

export default function ListCategories({
  idCat,
  image,
  title,
}: ItemCategoryProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CategoryMeal", { title })}
      key={idCat}
      style={styles.content}
    >
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{
          uri: `${image}`,
        }}
      />
      <Text style={{ color: "black", textAlign: "center" }}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    margin: 10,
    alignContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
