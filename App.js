import React, { Component } from 'react';
import {View,Text,Button,TextInput} from 'react-native';
import ComponentClass from './components/ComponentClass';
import ComponentFunction from './components/ComponentFuction';
import CoreComponent from './components/CoreComponent';

export default class App extends Component{
  render(){
    return(
      <View >
        {/* <Text>
          Hello MotherFucker...!
        </Text>
        <Text>
          Who the Fuck are you?
        </Text>
        <Text>
          Suprice MotherFucker.. :D
        </Text>
        <ComponentClass/>
        <ComponentFunction/>
        <TextInput
        placeholder="Enter your name here bitch"
        />
        <Button
        title="Click me bitch"
        /> */}
      
        <CoreComponent/>
      </View>
    )
  }
}