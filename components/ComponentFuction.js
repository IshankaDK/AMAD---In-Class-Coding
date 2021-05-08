import React from 'react';
import {View,Text,Image} from 'react-native';

export default function ComponentFunction(){
    return(
        <View>
            <Text>
                Function Component MF..!
            </Text>
            <Image
            source={require('../assest/react.png')}
            style={{width:200, height:200}}
            />
        </View>
    )
}