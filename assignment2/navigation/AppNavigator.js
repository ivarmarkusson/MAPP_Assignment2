import React from "react";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";

export default createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen
});
