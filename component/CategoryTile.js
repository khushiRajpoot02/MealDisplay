import {Text, FlatList, View, Pressable, StyleSheet, Platform} from "react-native";
function CategoryTile({ title, color , onPress}) {
  return (
    <View style = {[styles.gridItem, {backgroundColor  : '#24180f'}]}>
      <Pressable 
         onPress={onPress}
          android_ripple={{color  : '#ccc'}}
      
          style = {({pressed})=>[styles.button, pressed ? styles.buttonPressed : null]}>
        <View style = {[styles.innerView, {backgroundColor :color} ]}>
        <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryTile;


const styles = StyleSheet.create({
  container : {

    backgroundColor : '#24180f',
  },
  gridItem : {
    
    flex : 1,
    margin : 20,
    height : 150,
    elevation : 4,
    backgroundColor : 'white',
   borderRadius : 10,
    // for ios applying shadow properties
    shadowColor : 'black',
    shadowOpacity : 0.25,
    shadowOffset : {width : 0, height : 2},
    shadowRadius : 8,
    
    overflow : Platform.OS === 'ios' ? 'visible' : 'hidden',

  },
  button:{
    flex : 1,
  },
  buttonPressed:{
    opacity : 0.5,
  },
  innerView : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    padding : 10,
    borderRadius : 10,
  },
  text:{
    fontWeight : 'bold',
    fontSize:20,
  },

})



