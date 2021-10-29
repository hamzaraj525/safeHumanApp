import React, {Component, useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  Image,
  Text,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Main from './Main';
import Splash from './Splash';
import {startClock} from 'react-native-reanimated';
const Stack = createNativeStackNavigator();

export default class App extends Component {
  
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.45,
    elevation: 5,
    shadowRadius: 3.5,
  },
});
