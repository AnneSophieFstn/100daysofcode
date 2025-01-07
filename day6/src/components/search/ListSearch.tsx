import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

type ItemMealProps = {
  idMeal: string;

  image: string;
  title: string;
};
export default function ListSearch({ idMeal, image, title }: ItemMealProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailsMeal", idMeal)}
      style={{ margin: 5 }}
    >
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{
          uri: `${image}`,
        }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 5,
    width: 200,
    height: 250,
  },
});
