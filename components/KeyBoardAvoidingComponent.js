import React, { Component } from 'react'
import { Image, StyleSheet, Text, TextInput, View, Button, KeyboardAvoidingView } from 'react-native'

export default class KeyBoardAvoidingComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../assest/react.png')}
                    style={{ width: 300, height: 300 }}
                />
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Username"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Confirm Password"
                    style={styles.input}
                /><TextInput
                    placeholder="Confirm Password"
                    style={styles.input}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        alignItems: 'center',
        backgroundColor: "red"
      
    },
    input: {
        height: 50,
        backgroundColor: '#ffff',
        marginHorizontal: 10,
        marginVertical: 5,
        width: 300
    }
})
