import { NavigationContainer } from "@react-navigation/native";
import TabMenu from "./src/navigation/TabMenu";
import { PaperProvider } from "react-native-paper";
import FavoriteContext from "./src/context/FavoriteContext";

export default function App() {
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
