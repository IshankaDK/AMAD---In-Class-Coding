import React, { Component } from 'react'
import { Image, StyleSheet, Text, TextInput, View, Button, KeyboardAvoidingView } from 'react-native'

export default class KeyBoardAvoidingComponent extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}
            behavior='padding'
            >
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
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2ecc71',
        alignItems: 'center',
        justifyContent: 'center'

    },
    input: {
        height: 50,
        backgroundColor: '#ecf0f1',
        marginHorizontal: 10,
        marginVertical: 5,
        width: 300
    }
})
