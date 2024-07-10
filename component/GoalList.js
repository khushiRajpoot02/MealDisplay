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
  Modal
} from "react-native";

function GoalList(props) {
  return (

    <View style={styles.goalContainerText}>
      <Pressable
        onPress={props.onDeleteGoal.bind(this, props.id)}
        android_ripple={{ color: "red" }}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalContainerText: {
    padding: 8,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "purple",
  },
  goalText: {
    color: "white",
  },
});

export default GoalList;
