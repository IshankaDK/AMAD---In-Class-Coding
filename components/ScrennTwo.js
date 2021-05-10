import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';

export default class ScreenTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Screen Two </Text>
        <Button rounded info
         onPress={()=>{
            this.props.navigation.navigate('ScreenOne')
        }}
        >
            <Text>Load Screen One</Text>
          </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        
    }
})