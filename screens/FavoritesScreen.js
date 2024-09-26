import { View, Text , StyleSheet} from "react-native";
import MealList from "../component/MealsList/MealsList";
import { MEALS } from "../data/data";
// import { FavoritesContext } from "../store/context/favorites-context";
// import { useContext } from "react";
import { useSelector } from "react-redux";
function FavoritesScreen() {
  // abhi muje fav meals filterv krke display krna hai idhar
//   const favMealCntx = useContext(FavoritesContext);
const favMealIds = useSelector((state)=> state.favoritemeals.ids)
  const findFavMealList = MEALS.filter((meal) =>
    favMealIds.includes(meal.id)
  );

  if(findFavMealList.length ===0){
    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>No data found!</Text>
        </View>
    )
  }
  return <MealList items={findFavMealList} />;
}

export default FavoritesScreen;



const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : 'space-between',
        alignItems : 'center',
    },

    text : {
        color : 'white',
        fontSize : 20,
        textAlign : 'center',
        fontWeight : 'bold',
    },

})