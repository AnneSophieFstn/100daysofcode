import { useRef, useEffect } from "react";
import { Button, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

export default function SplashAnimation({ onAnimationFinish }) {
  const animation = useRef<LottieView>(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        loop={false}
        onAnimationFinish={onAnimationFinish}
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#fff",
        }}
        source={require("../../assets/animation.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
