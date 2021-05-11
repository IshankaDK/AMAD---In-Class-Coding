import React, { Component } from 'react';
import { View } from 'react-native';
import ComponentClass from './components/ComponentClass';
import ComponentFunction from './components/ComponentFuction';
import CoreComponent from './components/CoreComponent';
import ScrollViewComponent from './components/ScrollViewComponent';
import KeyBoardAvoidingComponent from './components/KeyBoardAvoidingComponent'
import Assignment from './components/Assignment';
import Flex from './components/Flex';
import NativeBase from './components/NativeBase';
import Fetch from './components/Fetch';
import Parent from './components/Parent'
import ScreenOne from './components/ScreenOne';
import ScreenTwo from './components/ScrennTwo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncView from './components/AsyncView';

const Stack = createStackNavigator();


export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Assignment" component={Assignment} />
          <Stack.Screen name="Fetch" component={Fetch} />
          <Stack.Screen name="AsyncView" component={AsyncView} />
          <Stack.Screen name="ScreenOne" component={ScreenOne} />
          <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
