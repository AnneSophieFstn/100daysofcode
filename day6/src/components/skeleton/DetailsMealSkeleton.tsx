import { useEffect } from "react";
import { FlatList, Image, ScrollView, StyleSheet, View } from "react-native";
import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export default function DetailsMealSkeleton() {
  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = withRepeat(withTiming(0.5, { duration: 1000 }), -1, true);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ backgroundColor: "#fff", paddingBottom: 80 }}
    >
      <View>
        <Animated.Image style={[styles.imageRecipe, { opacity }]} />

        <Animated.View
          style={[
            {
              paddingLeft: 16,
              paddingRight: 16,
              top: -30,
              backgroundColor: "#fff",
              borderRadius: 30,
            },
            { opacity },
          ]}
        >
          <Animated.View
            style={{
              backgroundColor: "gainsboro",
              height: 20,
              borderRadius: 5,
              marginTop: 10,
              marginBottom: 10,
            }}
          ></Animated.View>

          <View style={{ flexDirection: "row" }}>
            <Animated.View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginRight: 10,
              }}
            >
              <Animated.View
                style={{ height: 18, width: 18, backgroundColor: "gainsboro" }}
              ></Animated.View>

              <Animated.View
                style={{
                  marginLeft: 5,
                  height: 18,
                  width: 80,
                  backgroundColor: "gainsboro",
                }}
              ></Animated.View>
            </Animated.View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Animated.View
                style={{ height: 18, width: 18, backgroundColor: "gainsboro" }}
              ></Animated.View>

              <Animated.View
                style={{
                  marginLeft: 5,
                  height: 18,
                  width: 80,
                  backgroundColor: "gainsboro",
                }}
              ></Animated.View>
            </View>
          </View>

          <View>
            <Animated.View
              style={{
                height: 20,
                width: 200,
                backgroundColor: "gainsboro",
                marginTop: 20,
                marginBottom: 15,
              }}
            ></Animated.View>

            <FlatList
              data={Array(8)}
              renderItem={({ item }) => (
                <View style={styles.ingredientContainer}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image style={styles.ingredientImage} />

                    <View style={styles.ingredientText}></View>
                  </View>

                  <View>
                    <View style={styles.ingredientMeasure}></View>
                  </View>
                </View>
              )}
            />
          </View>

          <View>
            <View
              style={{
                height: 20,
                width: 150,
                marginTop: 5,
                backgroundColor: "gainsboro",
              }}
            ></View>

            <FlatList
              data={Array(10)}
              renderItem={({ item }) => (
                <View
                  style={{
                    backgroundColor: "gainsboro",
                    height: 20,
                    width: "100%",
                    marginTop: 5,
                  }}
                ></View>
              )}
            />
          </View>
        </Animated.View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageRecipe: {
    width: "100%",
    height: 300,
    backgroundColor: "gainsboro",
  },

  ingredientContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  ingredientImage: {
    borderRadius: 10,
    backgroundColor: "rgba(237, 237, 237, 1)",
    width: 50,
    height: 50,
    marginRight: 10,
  },
  ingredientText: {
    height: 20,
    width: 200,
    backgroundColor: "gainsboro",
  },
  ingredientMeasure: {
    height: 20,
    width: 50,
    backgroundColor: "gainsboro",
  },
});
