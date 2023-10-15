import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import HamburgerIcon from "./HamburgerIcon";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

export default function TopBar(props) {
  const leftValue = useSharedValue(12);
  const [activeItem, setActiveItem] = useState("LR");

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      left: withTiming(leftValue.value, config),
    };
  });

  return (
    <View style={topBarStyles.topBarContainer}>
      <TouchableOpacity onPress={() => props.setOpenDrawer(true)}>
        <HamburgerIcon style={{ marginTop: 10 }} />
      </TouchableOpacity>
      <ScrollView
        horizontal
        style={topBarStyles.horizontalScrollView}
        showsHorizontalScrollIndicator={false}
      >
        <Animated.View
          style={[
            {
              backgroundColor: "#000",
              width: 20,
              height: 2,
              position: "absolute",
              bottom: 0,
            },
            style,
          ]}
        />
        <TouchableOpacity
          onPress={() => {
            setActiveItem("LR");
            leftValue.value = 12;
          }}
        >
          <Text
            style={[
              { ...topBarStyles.textStyles },
              activeItem === "LR"
                ? { fontFamily: "Poppins-Bold" }
                : { color: "#7d7d7d" },
            ]}
          >
            Living Room
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setActiveItem("D");
            leftValue.value = 126;
          }}
        >
          <Text
            style={[
              topBarStyles.textStyles,
              activeItem === "D"
                ? { fontFamily: "Poppins-Bold" }
                : { color: "#7d7d7d" },
            ]}
          >
            Dining
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveItem("K");
            leftValue.value = 194;
          }}
        >
          <Text
            style={[
              topBarStyles.textStyles,
              activeItem === "K"
                ? { fontFamily: "Poppins-Bold" }
                : { color: "#7d7d7d" },
            ]}
          >
            Kitchen
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveItem("CBR");
            leftValue.value = 275;
          }}
        >
          <Text
            style={[
              topBarStyles.textStyles,
              activeItem === "CBR"
                ? { fontFamily: "Poppins-Bold" }
                : { color: "#7d7d7d" },
            ]}
          >
            Children Bed Room
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveItem("MBR");
            leftValue.value = 442;
          }}
        >
          <Text
            style={[
              topBarStyles.textStyles,
              activeItem === "MBR"
                ? { fontFamily: "Poppins-Bold" }
                : { color: "#7d7d7d" },
            ]}
          >
            Master Bed Room
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const topBarStyles = StyleSheet.create({
  topBarContainer: {
    padding: 5,
    display: "flex",
    flexDirection: "row",
    zIndex: -1,
  },
  textStyles: {
    paddingBottom: 15,
    fontSize: 15,
    paddingHorizontal: 12,
    fontFamily: "Poppins-Regular",
  },
  horizontalScrollView: {
    padding: 5,
  },
});
