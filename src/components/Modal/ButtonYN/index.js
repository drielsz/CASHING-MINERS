import React from 'react';
import { Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { Text } from '../../../styles';
var width = Dimensions.get("window").width
var height = Dimensions.get("window").height

export default function ButtonYN ({display, undisplay}) {
    return (
        <TouchableOpacity onPress={() => undisplay(!display)}>
        <ImageBackground source={require('../../../assets/RED.png')} style={{width: width * 0.25, height: height * 0.05}} imageStyle={{borderRadius: height * 0.03}}>
            <Text color transform>não</Text>
        </ImageBackground>
        </TouchableOpacity>
    )
 } 