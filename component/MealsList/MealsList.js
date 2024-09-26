import { View, Text, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

function MealList({items}){
    function rendermealItem(itemData) {
        const mealItemProp = {
          title: itemData.item.title,
          imageUrl: itemData.item.imageUrl,
          affordability: itemData.item.affordability,
          complexity: itemData.item.complexity,
          duration: itemData.item.duration,
          id: itemData.item.id,
        };
        return <MealItem {...mealItemProp} />;
      }
      return (
        <View style={styles.container}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={rendermealItem}
          />
        </View>
      );
}
export default MealList;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });
  