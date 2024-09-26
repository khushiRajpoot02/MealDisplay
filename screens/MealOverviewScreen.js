import { useLayoutEffect } from "react";

import { MEALS, CATEGORIES } from "../data/data";
import MealList from "../component/MealsList/MealsList";
function MealOverview({ route, navigation }) {
  const catId = route.params.CategoryId;
  const mealDisplayed = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

return <MealList  items = {mealDisplayed}/>
}

export default MealOverview;



