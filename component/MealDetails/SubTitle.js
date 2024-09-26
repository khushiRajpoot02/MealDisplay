import { View, Text, StyleSheet } from "react-native";
export default function SubTitle({ children }) {
  return (
    <View style = {styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children} : </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 6,
    color: "#e3d7d1",
    textAlign: "center",
  },
  subTitleContainer:{
    borderBottomRadius : 20,
    borderBottomWidth : 2,
    borderBottomColor : '#e3d7d1',
    marginHorizontal : 24,
    paddin : 6,
  },
});
