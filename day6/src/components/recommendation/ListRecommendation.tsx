import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

type ItemMealProps = {
  idMeal: string;
  image: string;
  title: string;
  tags: string;
};

export default function ListCountry({
  idMeal,
  image,
  title,
  tags,
}: ItemMealProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.contentCountry}
      onPress={() => navigation.navigate("DetailsMeal", { idMeal })}
    >
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{
          uri: `${image}`,
        }}
      />
      <View>
        <Text style={styles.titleCountry}>{title}</Text>
        {/* <Text style={styles.tagCountry}>{tags}</Text> */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contentCountry: {
    marginTop: 10,
    marginRight: 10,
    borderColor: "black",
  },
  image: {
    borderRadius: 5,
    width: 200,
    height: 250,
  },
  titleCountry: {
    bottom: 0,
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  tagCountry: {
    bottom: 0,
    color: "#fff",
    fontSize: 18,
    fontWeight: 800,
  },
});
