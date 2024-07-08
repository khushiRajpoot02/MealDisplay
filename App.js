import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import GoalList from "./component/GoalList";
import GoalInput from "./component/GoalInput";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewBase,
  FlatList,
} from "react-native";

export default function App() {
  const [showTest, setShowTest] = useState([]);

  function buttonHandler(inputText) {
    setShowTest((currentGoal) => [
      ...currentGoal,

      // inputText

      { text: inputText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setShowTest((currentCourseGoal) => {
      currentCourseGoal.filter((goal) => {
        return goal.id !== id;
      });
    });
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={buttonHandler} />
      <View style={styles.goalContainer}>
        <FlatList
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          data={showTest}
          renderItem={(itemdata) => {
            return (
              // <View style={styles.goalContainerText}>
              //   <Text style={styles.goalText}>{itemdata.item.text}</Text>
              // </View>
              <GoalList
                text={itemdata.item.text}
                onDeleteGoal={deleteGoalHandler}
                id={itemdata.item.id}
              />
            );
          }}
        />
        {/* {showTest.map((goal) => ( */}

        {/* )) */}
        {/* } */}
        {/* </FlatList> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: "#fff",
    // flexDirection:'column',
    paddingBottom: 10,
    flex: 1,
  },
  // inputTextContainer: {
  //   flex: 1,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   marginBottom: 20,
  //   alignItems: "center",
  //   borderBottomColor: "gray",
  //   borderBottomWidth: 1,
  // },
  // testInput: {
  //   borderWidth: 1,
  //   borderColor: "gray",
  //   padding: 5,
  //   width: "70%",
  //   marginRight: 5,
  //   marginBottom: 10,
  //   marginLeft: 5,
  // },
  goalContainer: {
    flex: 5,
  },
  // goalContainerText: {
  //   padding: 8,
  //   margin: 8,
  //   borderRadius: 6,
  //   backgroundColor: "purple",
  // },
  // goalText: {
  //   color: "white",
  // },
});
