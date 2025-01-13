import { FlatList, Image, StyleSheet, View } from "react-native";
import CustomFlatList from "../CustomFlatList";
import { useEffect } from "react";
import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export default function ListMealSkeleton() {
  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = withRepeat(withTiming(0.2, { duration: 1000 }), -1, true);
  }, []);

  return (
    <FlatList
      horizontal={true}
      data={Array(10)}
      renderItem={({ item }) => (
        <Animated.View style={[styles.contentMeal, { opacity }]}>
          <Animated.Image style={styles.image} />

          <View style={styles.titleMeal}></View>
        </Animated.View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  contentMeal: {
    marginTop: 10,
    marginRight: 10,
  },
  image: {
    backgroundColor: "gainsboro",
    borderRadius: 5,
    width: 200,
    height: 250,
  },
  titleMeal: {
    marginTop: 5,
    height: 20,
    width: 180,
    backgroundColor: "gainsboro",
  },
  tagMeal: {
    bottom: 0,
    color: "#fff",
    fontSize: 18,
    fontWeight: 800,
  },
});
