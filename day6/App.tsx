import { NavigationContainer } from "@react-navigation/native";
import TabMenu from "./src/navigation/TabMenu";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <TabMenu />
      </NavigationContainer>
    </PaperProvider>
  );
}
