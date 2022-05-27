import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import MenuScreen from './MenuScreen';
import stackGuessNumber from './stackGuessNumber';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen}/>
      <Drawer.Screen name="Tasks" component={MenuScreen} options={{title: "Juegos"}} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="GuessNumber" component={stackGuessNumber} options={{title: "Tarea"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}