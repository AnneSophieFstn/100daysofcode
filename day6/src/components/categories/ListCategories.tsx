import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ItemProps = {
  idCat: string;
  image: string;
  title: string;
};

export default function ListCategories({ idCat, image, title }: ItemProps) {
  // https:\/\/www.themealdb.com\/images\/category\/miscellaneous.png

  return (
    <TouchableOpacity
      onPress={() => console.log("ok")}
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
      <Text style={{ color: "black" }}>{title}</Text>
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
