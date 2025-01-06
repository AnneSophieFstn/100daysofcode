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
type ItemCountryProps = {
  country: string;
};

export default function ListCountry({ country }: ItemCountryProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.contentCountry}
      //   onPress={() => navigation.navigate("DetailsCountry", { idCountry })}
    >
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{
          uri: `https:\/\/www.themealdb.com\/images\/media\/meals\/kos9av1699014767.jpg`,
        }}
      />
      <View>
        <Text style={styles.titleCountry}>{country}</Text>
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
