import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewBase,
  FlatList,
  Pressable,
} from "react-native";
function GoalInput(props) {
  const [inputText, setinputText] = useState("");
  function inputHandler(eneteredText) {
    setinputText(eneteredText);
  }
  function buttonHandler() {
    props.onAddGoal(inputText);
    setinputText("");
  }

  return (
    <View style={styles.inputTextContainer}>
      <TextInput
        placeholder="type your goal here.."
        style={styles.testInput}
        onChangeText={inputHandler}
        value={inputText}
      ></TextInput>
      <Button title="Add your" onPress={buttonHandler}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  inputTextContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  testInput: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    width: "70%",
    marginRight: 5,
    marginBottom: 10,
    marginLeft: 5,
  },
  //   goalContainer: {
  //     flex: 5,
  //   },
});

export default GoalInput;
