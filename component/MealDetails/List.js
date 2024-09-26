import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function List({ listData }) {
  return (
        listData?.map((data) => (
            <View style={styles.listItem}>
                 <Text key={data} style = {styles.itemText}>{data}</Text>
            </View>
         
        ))
    
  );
}

const styles = StyleSheet.create({
 listItem : {
  borderRadius : 6,
  paddingHorizontal : 8,
  paddingVertical : 4,
  marginVertical:4,
  marginHorizontal: 12,
  backgroundColor : '#e2b497',

  },
  itemText: {
    color : '#351401',
    textAlign : 'center',
  }

});
