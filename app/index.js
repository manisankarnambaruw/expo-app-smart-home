import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import TopBar from "../components/TopBar";
import Drawer from "../components/Drawer";
import { EvilIcons, Ionicons } from "@expo/vector-icons";

export default function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <View style={AppStyles.pageContainer}>
      <TopBar setOpenDrawer={setOpenDrawer} />
      <Drawer open={openDrawer} setOpenDrawer={setOpenDrawer} />
      <View style={{ display: "flex", flexDirection: "row", height: 120 }}>
        <View>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              textAlign: "center",
              paddingTop: 15,
              paddingLeft: 15,
              paddingBottom: 5,
              fontSize: 16,
              color: "#7d7d7d",
            }}
          >
            Welcome Home
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              paddingLeft: 15,
              paddingBottom: 10,
              fontSize: 20,
            }}
          >
            Mani
          </Text>
        </View>
        <View style={{ flexGrow: 1 }}>
          <EvilIcons
            name="location"
            size={120}
            color="#ff6b3b"
            style={{ position: "absolute", right: 45, zIndex: -2 }}
          />
          <View
            style={{
              position: "absolute",
              width: 50,
              height: 50,
              backgroundColor: "#fff",
              zIndex: -1,
              top: 44,
              right: 45,
            }}
          />
          <Ionicons
            name="home"
            size={50}
            color="#ff6b3b"
            style={{
              position: "absolute",
              zIndex: 1,
              top: 35,
              right: 50,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const AppStyles = StyleSheet.create({
  pageContainer: {
    backgroundColor: "white",
  },
});
