import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import CategoryScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverview from "./screens/MealOverviewScreen";
import MealdetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
const Stack = createNativeStackNavigator();
import FavoritesContextProvider from "./store/context/favorites-context";
import IconButton from "./component/IconButton";

const Drawer = createDrawerNavigator();


// function handleheaderButttonPress() {
//   console.log("pressed!! vuihduewhfi");
// }

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#351401" },
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerActiveTintColor: "#351401",
        drawerInactiveTintColor: "white",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen name="Category" component={CategoryScreen} />

      <Drawer.Screen name="Favorite" component={FavoritesScreen} options={
        {
          // drawerIcon : ()=>{
          //   return   <IconButton
          //   onPress={handleheaderButttonPress}
          //   icon="star"
          //   color="white"
          // />
          // }
        }
      } />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <FavoritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#351401" },
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Drawer"
            component={DrawerNavigator}
          />

          <Stack.Screen name="GridDetails" component={MealOverview} />
          <Stack.Screen
            name="MealDetailsOverView"
            component={MealdetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesContextProvider>
  );
}
const styles = StyleSheet.create({});
