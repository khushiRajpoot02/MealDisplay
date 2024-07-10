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
  Modal,
  Image

} from "react-native";
function GoalInput(props) {
  const [inputText, setinputText] = useState("");
  function inputHandler(eneteredText) {
    setinputText(eneteredText);
  }
  function buttonHandlerFunction() {
    props.onAddGoal(inputText);
    setinputText("");
  }

  return (
    <Modal visible = {props.showModal} animationType="slide">

    <View style={styles.inputTextContainer}>
      <Image  style = {styles.image} source={require('../assets/goal.png')}/>
      <TextInput
        placeholder="type your goal here.."
        style={styles.testInput}
        onChangeText={inputHandler}
        value={inputText}
      ></TextInput>

      <View style = {styles.buttonContent}>
        <View style = {styles.button}>
        <Button title="Add your Goal.." onPress={buttonHandlerFunction} color={'#5e0acc'}></Button>
        </View>
      <View style = {styles.button}>
      <Button title="Cancel Goal..."  onPress={props.cancelGoal} color={'#f31282'}></Button>
      </View>
    
      </View>
     

    </View>
    </Modal>

  );
}

const styles = StyleSheet.create({
  inputTextContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 20,
    alignItems: "center",
    backgroundColor : '#311b6b',
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
  buttonContent:{
    // width : 100,
    flexDirection : 'row',
    justifyContent : 'space-around',
    marginTop:30,
  },
  button:{
   width : '30%',
    marginHorizontal: 10,
  
  },
  image:{
    height: 100,
    width : 100,
    margin:20,
  } 

  
  //   goalContainer: {
  //     flex: 5,
  //   },
});

export default GoalInput;
