import React, {useEffect, useState} from 'react';
import { Alert, Modal, StyleSheet, Pressable, View, Dimensions, Button, Wrapper, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Text, ImageBackground } from '../../styles'
// Dimensões
var width = Dimensions.get('window').width
var height = Dimensions.get('window').height;
// Cores
import { colors } from '../../styles/colors';
// Load
import AppLoading from 'expo-app-loading';
// Botão
import ButtonYN from './ButtonYN'
export const ModalComponent = ({display, undisplay, count1, price1, setFunction, setNivel, nivel, modalPicareta}) => {
    const [percentGain, setPercentGain] = useState(5)
    const [ click, setClick ] = useState(false)
    function renderNivel () {
        if(nivel <= 4)
            return nivel + 1
        else 
            return "5"
    }

    function renderImage () {
        if(nivel === 0)
            return <Image source={require('../../assets/FirstPolygon.png')} resizeMode='contain' style={{width: width * 0.5, height: height * 0.15, bottom: height * 0.03}}/> 
        if(nivel === 1)
            return <Image source={require('../../assets/SecondPolygon.png')} resizeMode='contain' style={{width: width * 0.5, height: height * 0.15, bottom: height * 0.03}}/>
        if(nivel === 2)
            return <Image source={require('../../assets/TertiaryPolygon.png')} resizeMode='contain' style={{width: width * 0.5, height: height * 0.15, bottom: height * 0.03}}/>
        if (nivel === 3)
            return <Image source={require('../../assets/QuartiaryPolygon.png')} resizeMode='contain' style={{width: width * 0.5, height: height * 0.15, bottom: height * 0.03}}/>
        else 
            return <Image source={require('../../assets/MaxPolygon.png')} resizeMode='contain' style={{width: width * 0.5, height: height * 0.15, bottom: height * 0.03}}/>
    }

    function renderText () {
        if (nivel === 0) 
            return `${percentGain}%`
        if (nivel === 1)
            return `${percentGain + 5}%`
        if (nivel === 2)
            return `${percentGain + 10}%`
        if (nivel === 3)
            return `${percentGain + 15}%`
        else 
            return `${percentGain + 20}%`
    }

    function renderOtherText () {
        if(nivel <= 3)
            return "Tem certeza que deseja encantar?"
        else 
            return ""
    }

    function renderWarning () {
        if(nivel <= 3)
            return "importante: os encatamentos atuais serão perdidos ao evoluir a picareta. pense com cuidado"
        else 
            return ""
    }

    function renderButton () {
        if(nivel <= 3)
            return (
            <> 
        <TouchableOpacity onPress={() => undisplay(!display)}>
            <ImageBackground source={require('../../assets/RED.png')} style={{ width: width * 0.25, height: height * 0.05 }} imageStyle={{ borderRadius: height * 0.03 }}>
                <Text color transform>não</Text>
            </ImageBackground>
        </TouchableOpacity><TouchableOpacity onPress={() => ConfirmBuy()}>
                <ImageBackground source={require('../../assets/GREEN.png')} style={{ width: width * 0.25, height: height * 0.05 }} imageStyle={{ borderRadius: height * 0.03 }}>
                    {click == true ? <ActivityIndicator size="large" color={colors.inputLogin} /> : <Text color transform>sim</Text>}
                </ImageBackground>
        </TouchableOpacity>
    </>
        )
        else 
            return null
    }

    function ConfirmBuy () {
        setClick(true)
    
        setTimeout(() => {
            setClick(false)
            undisplay(!display)
            setFunction(count1 - price1)
            setNivel(nivel + 1)
        }, 500)
    }
    
    return( 
    <Modal visible={display} transparent={true}>
        <View style={{height: height * 0.5, width: width * 0.9,  backgroundColor:'#242A2E', alignItems:'center', alignSelf:'center', justifyContent:'center', top: height / 5, borderRadius: height * 0.02}}>
            <TouchableOpacity onPress={() => undisplay(!display)} style={{position:'absolute', backgroundColor:'#212526', width: 60, height: 60, borderRadius: 60, alignItems:'center', justifyContent:'center', bottom: height * 0.44, left: height * 0.37, top: height * 0.007}}>
                        <Text color>X</Text>
            </TouchableOpacity>


            {display === true ? renderImage() : modalPicareta === true ? <Image source={require('../../assets/picareta.png')} style={{width: width * 0.9, height: height * 0.1}} resizeMode='contain'/> : null}

            
            <Text style={{textAlign:'center'}} 
            color transform>
            Encantamento <Text transform color>nível {renderNivel()} (5000 <Text transform ouro>CHM</Text>)</Text></Text>
            <Text style={{textAlign:'center', color: colors.encantamento}}>{renderText()} <Text color>de <Text ouro transform>chm <Text color>por clique.</Text></Text></Text></Text>
            <Text style={{textAlign:'center', top: height * 0.01}} transform>{renderWarning()}</Text>
            <Text style={{textAlign:'center', top: height * 0.02}} color>{renderOtherText()}</Text> 
            <View style={{flexDirection:'row', width: width / 1.5, justifyContent:'space-around', top: height * 0.04}}>
            
            {renderButton()}

         
            </View> 

        </View>    
        
    </Modal>
    )
}
