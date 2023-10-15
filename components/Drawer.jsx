import { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { Dimensions, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Drawer(props) {
  const width = useSharedValue(0);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, config),
    };
  });

  useEffect(() => {
    if (props.open) {
      width.value = Dimensions.get("window").width / 1.5;
    }
  }, [props.open]);

  return (
    <>
      {props.open && (
        <TouchableOpacity
          onPress={() => {
            props.setOpenDrawer(false);
            width.value = 0;
          }}
          style={{
            position: "absolute",
            width:
              Dimensions.get("window").width -
              Dimensions.get("window").width / 1.5,
            height: Dimensions.get("window").height,
            backgroundColor: "rgba(0,0,0,0.2)",
            right: 0,
            top: 0,
            zIndex: 1,
          }}
        >
          <View />
        </TouchableOpacity>
      )}
      <Animated.View
        style={[
          {
            position: "absolute",
            height: Dimensions.get("screen").height,
            backgroundColor: "#fff",
            top: 0,
            zIndex: 1,
          },
          style,
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            props.setOpenDrawer(false);
            width.value = 0;
          }}
        >
          <AntDesign name="close" size={22} color="black" />
        </TouchableOpacity>
      </Animated.View>
    </>
  );
}
