import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, Text } from 'native-base'

export default class Fetch extends Component {

    getData() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((json) => console.log(json));

    }

    render() {
        return (
            <View>
                <Text style={{marginBottom:10}}>Fetch Example</Text>
                <Button rounded success
                onPress={this.getData.bind(this)}
                >
                    <Text>Get Data</Text>
                </Button>
            </View>
        )
    }
}
