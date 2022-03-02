import React from 'react';
import {TouchableOpacity, View, ImageBackground, Dimensions} from 'react-native';
import { Text } from '../../styles'
import ButtonImage from '../../assets/Button.png'

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default function ButtonWithdraw () {
    return(
    <View style={{flex:0.2, top: height * 0.08, alignItems:'center', justifyContent:'center'}}> 
        <TouchableOpacity style={{alignItems:'center', justifyContent:'center', textAlign:'center'}}>
            <ImageBackground
            resizeMode='contain'
            style={{width: width * 0.35, height: 100}}
            source={ButtonImage}
            >
            <Text style={{top: height * 0.025}} transform color>sacar</Text>
            </ImageBackground>
        </TouchableOpacity> 
    </View>
    )
}
