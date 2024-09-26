import { View, Pressable, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
function IconButton({ onPress, icon, color }) {
  console.log("icon", icon);
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Icon name={icon} size={24} color={color} />
    </Pressable>
  );
}
export default IconButton;
const styles = StyleSheet.create({
  button: {
    // // marginRight: 10,
    // // padding: 10,
    // alignItems: "center",
    // justifyContent: "center",
  },
  pressed: {
    opacity: 0.7,
    backgroundColor: "green",
  },
});
