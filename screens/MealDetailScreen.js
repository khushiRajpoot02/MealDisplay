import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Mealdetails from "../component/MealDetail";
import { MEALS } from "../data/data";
import SubTitle from "../component/MealDetails/SubTitle";
import List from "../component/MealDetails/List";
import { useEffect } from "react";
import IconButton from "../component/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import { useContext } from "react";

export default function MealdetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const mealDetailDisplay = MEALS.find((meal) => meal.id === mealId);
  const favmealCtx = useContext(FavoritesContext);
  const mealFav = favmealCtx?.ids?.includes(mealId);
  console.log("mealFav", mealFav);
  function changeFavStatus() {
    if (mealFav) {
      favmealCtx.removeFavorite(mealId);
    } else {
      favmealCtx.addFavorite(mealId);
    }
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavStatus}
            icon={mealFav ? "star" : "star-o"}
            color="white"
          />
        );
      },
    });
  }, [changeFavStatus, navigation]);
  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image
          source={{ uri: mealDetailDisplay.imageUrl }}
          style={styles.image}
        />

        <Text style={styles.title}>
          This is the text screen!({mealDetailDisplay.title})
        </Text>

        <Mealdetails
          affordability={mealDetailDisplay.affordability}
          complexity={mealDetailDisplay.complexity}
          duration={mealDetailDisplay.duration}
          textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <SubTitle children="Ingredients" />

            <List listData={mealDetailDisplay.ingredients} />
            <SubTitle children="Steps:" />
            <List listData={mealDetailDisplay.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    margin: 8,
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});

//max to max  15th October
// per day I have to finsih
// 1 hr lecture =  3hrs
// 12 * 3 = 36
// make sure to complete it with 1 major project and and I can add features and all
// along with it I have to keep practice of office projects with myself and refactor code and also add features
