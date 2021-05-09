import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Flex extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.view1}>
                </View>
                <View style={styles.view2}>
                </View>
                <View style={styles.view3}>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e67e22'
    },
    view1: {
        flex:1.5,
        backgroundColor: '#27ae60'
    },
    view2: {
        flex: 3,
        backgroundColor: '#2980b9'
    },
    view3: {
        flex: 2,
        backgroundColor: '#e74c3c'
    }
})