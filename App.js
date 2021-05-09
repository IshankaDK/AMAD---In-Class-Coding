import React, { Component } from 'react';
import {
  View
} from 'react-native';
import ComponentClass from './components/ComponentClass';
import ComponentFunction from './components/ComponentFuction';
import CoreComponent from './components/CoreComponent';
import ScrollViewComponent from './components/ScrollViewComponent';
import KeyBoardAvoidingComponent from './components/KeyBoardAvoidingComponent'
import Assignment from './components/Assignment';
import Flex from './components/Flex';
import NativeBase from './components/NativeBase';

export default class App extends Component {
  render() {
    return (
      //  <View>
         <NativeBase/>
      //  </View>
    )
  }
}
