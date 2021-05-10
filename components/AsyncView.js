import { Button } from 'native-base';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AsyncView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    storeData = async (value) => {
        try {
            await AsyncStorage.setItem('isLogedIn', "true")
            console.log("data saved");
        } catch (e) {
            // saving error
        }
    }


    getData = async () => {
        try {
            const value = await AsyncStorage.getItem('isLogedIn')
            if (value !== null) {
                console.log("this is data: "+value);
            }
        } catch (e) {
            // error reading value
            console.log(e);
        }
    }

    removeValue = async () => {
        try {
          await AsyncStorage.removeItem('isLogedIn')
          console.log("data removed ");
        } catch(e) {
          // remove error
        }
      
        console.log('Done.')
      }

    render() {
        return (
            <View>
                <Button rounded success
                    onPress={this.storeData.bind(this)}
                >
                    <Text>Save Data</Text>
                </Button>
                <Button rounded primary
                    onPress={this.getData.bind(this)}
                >
                    <Text>Load Data</Text>
                </Button>
                <Button rounded danger
                    onPress={this.removeValue.bind(this)}
                >
                    <Text>Remove Data</Text>
                </Button>
            </View>
        );
    }
}
