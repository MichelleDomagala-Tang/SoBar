import React, { Component } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import Home from "./screens/home";
import Map from "./screens/map";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
}
export default createAppContainer(MyStack);