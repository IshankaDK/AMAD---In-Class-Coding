import React, { Component } from 'react'
import { Text, View, Image, TextInput, Button,StyleSheet} from 'react-native'

export default class CoreComponent extends Component {
    state = {
        name: '',
        student:''
    }

    getCustomer(){
        console.log(this.state.name);
    }

    getStudent(){
       console.log(this.state.student);
    }

    render() {
        return (
            <View>
                <Text style={style.title}> Hello IJSE </Text>
                {/* <Image
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                    style={{ width: 150, height: 150 }}
                /> */}
                <TextInput style={style.head}
                    placeholder="Customer Id"
                    value={this.state.name}
                    onChangeText={(value) => {
                        // console.log(value);
                        this.setState({
                            name: value
                        })
                        // console.log(this.state.name);
                    }}
                />
                <Button
                    title="print me"
                    onPress={()=>{
                        // console.log(this.state.name);
                        this.getCustomer();
                    }}
                />
                 <TextInput style={style.head}
                    placeholder="Student Name"
                    value={this.state.student}
                    onChangeText={(value) => {
                        this.setState({
                            student: value
                        })
                    }}
                />
                 <Button
                    title="Student"
                    color="red"
                    onPress={this.getStudent.bind(this)}
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
    title:{
        color:'red'
    },
    head:{
        marginTop:20,
        backgroundColor:'#ffff'
    }
})