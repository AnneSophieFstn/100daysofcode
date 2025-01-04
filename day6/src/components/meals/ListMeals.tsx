import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

type ItemMealProps = {
  idMeal: string;
  image: string;
  title: string;
  tags: string;
};

export default function ListMeals({
  idMeal,
  image,
  title,
  tags,
}: ItemMealProps) {
  return (
    <View key={idMeal} style={styles.contentMeal}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{
          uri: `${image}`,
        }}
      />
      <View style={{ position: "absolute", bottom: 0 }}>
        <Text style={styles.titleMeal}>{title}</Text>
        {/* <Text style={styles.tagMeal}>{tags}</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentMeal: {
    position: "relative",
    marginTop: 10,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black",
  },
  image: {
    width: 200,
    height: 200,
  },
  titleMeal: {
    // position: "absolute",
    bottom: 0,
    color: "#fff",
    fontSize: 18,
    fontWeight: 800,
  },
  tagMeal: {
    // position: "absolute",
    bottom: 0,
    color: "#fff",
    fontSize: 18,
    fontWeight: 800,
  },
});
