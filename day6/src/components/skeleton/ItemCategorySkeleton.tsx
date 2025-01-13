import { useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export default function ItemCategorySkeleton() {
  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = withRepeat(withTiming(0.2, { duration: 1000 }), -1, true);
  }, []);
  return (
    <FlatList
      horizontal={true}
      data={Array(10)}
      renderItem={({ item }) => (
        <Animated.View style={[styles.content, { opacity }]}>
          <Animated.Image style={styles.image} />
          <Animated.View
            style={{
              marginTop: 5,
              height: 15,
              width: 60,
              backgroundColor: "gainsboro",
            }}
          ></Animated.View>
        </Animated.View>
      )}
    />
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
    backgroundColor: "gainsboro",
    borderRadius: 50,
  },
});
