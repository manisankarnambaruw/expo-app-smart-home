import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Stack, Tabs } from "expo-router";

import Constants from "expo-constants";
import BottomNavigation from "../components/BottomNavigation";
import { useFonts } from "expo-font";

export default function _layout() {
  const [fontsLoaded] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <View style={layoutStyleSheet.stackContainer}>
      <Stack screenOptions={{ headerShown: false }} />
      <BottomNavigation />
    </View>
  );
}

const layoutStyleSheet = StyleSheet.create({
  stackContainer: {
    height: Dimensions.get("window").height,
    paddingLeft: 20,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: "#fff",
    fontFamily: "Poppins-Regular",
  },
});
