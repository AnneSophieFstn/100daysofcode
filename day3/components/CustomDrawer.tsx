import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { StyleSheet, Text, View } from "react-native";

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Text style={styles.titleAvatar}>A</Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <View>
            <Text style={{ fontWeight: 800, fontSize: 16 }}>John Doe</Text>
          </View>
          <View>
            <Text style={{ fontSize: 14 }}>@john_doe</Text>
          </View>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  profile: {
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },

  titleAvatar: {
    fontWeight: 800,
    fontSize: 50,
    color: "white",
  },
});
