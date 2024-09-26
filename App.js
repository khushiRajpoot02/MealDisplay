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
import { Provider } from 'react-redux'
const Drawer = createDrawerNavigator();
import { store } from "./store/redux/store";


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

      <Drawer.Screen name="Favorite" component={FavoritesScreen}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <Provider store = {store}>
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
      </Provider>
  );
}
const styles = StyleSheet.create({});
