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
import { ItemMealProps } from "../../types/MealType";
import { Skeleton } from "moti/skeleton";

export default function CustomList({
  idMeal,
  image,
  title,
  loading,
}: ItemMealProps) {
  const navigation = useNavigation();
  const Spacer = ({ height = 16 }) => <View style={{ height }} />;
  return (
    <TouchableOpacity
      key={idMeal}
      style={styles.contentMeal}
      onPress={() => navigation.navigate("DetailsMeal", { idMeal })}
    >
      <Skeleton colorMode="light" height={250} width={200}>
        {loading ? null : (
          <Image
            resizeMode="cover"
            style={styles.image}
            source={{
              uri: `${image}`,
            }}
          />
        )}
      </Skeleton>

      <Spacer height={8} />

      <Skeleton colorMode="light" height={15} width={150}>
        {loading ? null : (
          <View>
            <Text style={styles.titleMeal}>{title}</Text>
          </View>
        )}
      </Skeleton>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contentMeal: {
    marginTop: 10,
    marginRight: 10,
    borderColor: "black",
  },
  image: {
    borderRadius: 5,
    width: 200,
    height: 250,
  },
  titleMeal: {
    bottom: 0,
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  tagMeal: {
    bottom: 0,
    color: "#fff",
    fontSize: 18,
    fontWeight: 800,
  },
});
