import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ItemCategoryProps } from "../../types/CategoryType";
import { useNavigation } from "@react-navigation/native";
import { Skeleton } from "moti/skeleton";
import { useState } from "react";

export default function ListCategories({
  idCat,
  image,
  title,
  loading,
}: ItemCategoryProps) {
  const navigation = useNavigation();

  const Spacer = ({ height = 16 }) => <View style={{ height }} />;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CategoryMeal", { title })}
      key={idCat}
      style={styles.content}
    >
      <Skeleton colorMode="light" width={50} height={50} radius={"round"}>
        {loading ? null : (
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{
              uri: `${image}`,
            }}
          />
        )}
      </Skeleton>

      <Spacer height={8} />

      <Skeleton colorMode="light" height={12} width={40}>
        {loading ? null : (
          <Text style={{ color: "black", textAlign: "center" }}>{title}</Text>
        )}
      </Skeleton>
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
