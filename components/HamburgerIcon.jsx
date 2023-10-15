import { View } from "react-native";

export default function Hamburger(props) {
  return (
    <View style={props.style}>
      <View style={{ width: 20, backgroundColor: "#000", height: 2 }} />
      <View
        style={{
          width: 12,
          backgroundColor: "#000",
          height: 2,
          marginTop: 5,
        }}
      />
    </View>
  );
}
