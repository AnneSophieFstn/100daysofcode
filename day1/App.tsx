import { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function App() {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    } else {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const resetTimer = () => {
    clearInterval(timerRef.current!);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (timeInSeconds: number): string => {
    const hours = String(Math.floor(timeInSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((timeInSeconds % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(Math.floor(timeInSeconds % 60)).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Chronomètre</Text>
      </View>
      <View>
        <Text style={styles.timerSize}>{formatTime(time)}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => startTimer()} style={styles.button}>
          {isRunning ? (
            <FontAwesome name="pause" size={24} color="white" />
          ) : (
            <FontAwesome name="play" size={24} color="white" />
          )}
        </TouchableOpacity>
        {time > 0 || isRunning ? (
          <TouchableOpacity onPress={() => resetTimer()} style={styles.button}>
            <FontAwesome name="square" size={24} color="white" />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 30,
    fontWeight: 800,
  },
  button: {
    backgroundColor: "#000",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 5,
  },
  timerSize: {
    fontSize: 50,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
