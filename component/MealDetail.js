import { View, Text, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/data";
export default function Mealdetails({ affordability, duration, complexity, style, textStyle }) {
  return (
    <View style={[styles.moreInfoContainer, style]}>
      <Text style={[styles.moreInfo, textStyle]}>{affordability}</Text>
      <Text style={[styles.moreInfo, textStyle]}>{duration}</Text>
      <Text style={[styles.moreInfo, textStyle]}>{complexity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  moreInfoContainer: {
    margin: 5,
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
  },
  moreInfo: {
    textAlign: "center",
    color: "black",
    fontSize: 14,
  },
});
