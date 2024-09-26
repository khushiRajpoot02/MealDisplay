import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Mealdetails from "../MealDetail";
export default function MealItem({
  title,
  imageUrl,
  affordability,
  duration,
  complexity,
  id,
}) {
  const navigation = useNavigation();

  function handlePress() {
    console.log("pressed");
    navigation.navigate("MealDetailsOverView", { mealId: id });
  }
  return (
    <View style={Styles.container}>
      <Pressable android_ripple={{ color: "#ccc" }} onPress={handlePress}>
        <View style={Styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={Styles.image} />

            <Text style={Styles.title}>{title}</Text>
          </View>
          <Mealdetails
            affordability={affordability}
            duration={duration}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,

    overflow: Platform.OS === "ios" ? "visible" : "hidden",
    elevation: 4,
    backgroundColor: "white",
    borderRadius: 10,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    textAlign: "center",
    fontSize: 17,
    color: "black",
    fontWeight: "bold",
  },
});
