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
  const leftValue = useSharedValue(15);
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
            leftValue.value = 15;
          }}
        >
          <Text
            style={[
              { ...topBarStyles.textStyles },
              activeItem === "LR"
                ? { fontWeight: "bold" }
                : { color: "#7d7d7d" },
            ]}
          >
            Living Room
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setActiveItem("D");
            leftValue.value = 128;
          }}
        >
          <Text
            style={[
              topBarStyles.textStyles,
              activeItem === "D"
                ? { fontWeight: "bold" }
                : { color: "#7d7d7d" },
            ]}
          >
            Dining
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveItem("K");
            leftValue.value = 200;
          }}
        >
          <Text
            style={[
              topBarStyles.textStyles,
              activeItem === "K"
                ? { fontWeight: "bold" }
                : { color: "#7d7d7d" },
            ]}
          >
            Kitchen
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveItem("CBR");
            leftValue.value = 280;
          }}
        >
          <Text
            style={[
              topBarStyles.textStyles,
              activeItem === "CBR"
                ? { fontWeight: "bold" }
                : { color: "#7d7d7d" },
            ]}
          >
            Children Bed Room
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setActiveItem("MBR");
            leftValue.value = 438;
          }}
        >
          <Text
            style={[
              topBarStyles.textStyles,
              activeItem === "MBR"
                ? { fontWeight: "bold" }
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
    paddingHorizontal: 15,
  },
  horizontalScrollView: {
    padding: 5,
  },
});
