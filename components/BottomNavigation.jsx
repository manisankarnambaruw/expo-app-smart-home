import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { Link, usePathname } from "expo-router";

export default function BottomNavigation() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <View style={layoutStyleSheet.bottomNavigationContainer}>
      <View style={layoutStyleSheet.iconsWrapper}>
        <Link href="/" style={layoutStyleSheet.iconButton}>
          <Ionicons
            name="md-home"
            size={22}
            color={pathname === "/" ? "#ff6b3b" : "#7d7d7d"}
          />
        </Link>
        <Link href="profile" style={layoutStyleSheet.iconButton}>
          <FontAwesome5
            name="user-alt"
            size={20}
            color={pathname === "/profile" ? "#ff6b3b" : "#7d7d7d"}
          />
        </Link>
        <Link href="profile" style={layoutStyleSheet.iconButton}>
          <Ionicons
            name="flash"
            size={24}
            color={pathname === "/statistics" ? "#ff6b3b" : "#7d7d7d"}
          />
        </Link>
        <Link href="profile" style={layoutStyleSheet.iconButton}>
          <Ionicons
            name="ios-settings"
            size={22}
            color={pathname === "/settings" ? "#ff6b3b" : "#7d7d7d"}
          />
        </Link>
      </View>
    </View>
  );
}

const layoutStyleSheet = StyleSheet.create({
  bottomNavigationContainer: {
    position: "absolute",
    bottom: 0,
    width: Dimensions.get("window").width,
    backgroundColor: "#DDD",
    height: 70,
    shadowColor: "#000000",
    shadowOffset: -15,
    shadowOpacity: 0.6,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  iconsWrapper: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  iconButton: { padding: 15, paddingTop: 20, opacity: 1 },
});
