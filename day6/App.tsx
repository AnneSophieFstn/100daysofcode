import { NavigationContainer } from "@react-navigation/native";
import TabMenu from "./src/navigation/TabMenu";
import { PaperProvider } from "react-native-paper";
import FavoriteContext from "./src/context/FavoriteContext";
import { useState } from "react";
import SplashAnimation from "./src/components/SplashAnimation";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs(true);

export default function App() {
  const [splashIsFinished, setSplashIsFinished] = useState(false);

  if (!splashIsFinished) {
    return (
      <SplashAnimation onAnimationFinish={() => setSplashIsFinished(true)} />
    );
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <FavoriteContext>
          <TabMenu />
        </FavoriteContext>
      </NavigationContainer>
    </PaperProvider>
  );
}
