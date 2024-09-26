import { View, Text, FlatList } from "react-native";
import { CATEGORIES } from "../data/data";
import CategoryTile from "../component/CategoryTile";
function CategoryScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    return (
      <CategoryTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={() => navigation.navigate("GridDetails", {CategoryId : itemData.item.id})}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoryScreen;
