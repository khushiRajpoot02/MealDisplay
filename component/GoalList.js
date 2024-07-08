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

function GoalList(props) {
  return (
    <Pressable onPress={props.onDeleteGoal.bind(this, props.id)}>
      <View style={styles.goalContainerText}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
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
