import React, {useEffect, useState} from 'react';
import { Alert, Modal, StyleSheet, Pressable, View, Dimensions, Button, Wrapper, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Text, ImageBackground } from '../../../styles'
// Dimensões
var width = Dimensions.get('window').width
var height = Dimensions.get('window').height;
// Cores
import { colors } from '../../../styles/colors';
// Load
import AppLoading from 'expo-app-loading';
// Botão

export const ModalPicareta = ({setModalPicareta, modalPicareta, count, price, setNivelPicareta, nivelPicareta, setFunction}) => { 
    const [nivel, setNivel] = useState(0)
    const [ click, setClick ] = useState(false)
    const [ percentGain, setPercentGain ] = useState(5)



    function renderImage () {
        if(nivel === 0)
            return <Image source={require('../../../assets/picaretaferromodal.png')} resizeMode='contain' style={{width: width * 0.5, height: height * 0.15, bottom: height * 0.03}}/> 
        if(nivel === 1)
            return <Image source={require('../../../assets/picaretaouromodal.png')} resizeMode='contain' style={{width: width * 0.5, height: height * 0.15, bottom: height * 0.03}}/>
        if(nivel === 2)
            return <Image source={require('../../../assets/picaretadiamantemodal.png')} resizeMode='contain' style={{width: width * 0.5, height: height * 0.15, bottom: height * 0.03}}/>
        if (nivel === 3)
            return <Image source={require('../../../assets/picaretaesmeraldamodal.png')} resizeMode='contain' style={{width: width * 0.5, height: height * 0.15, bottom: height * 0.03}}/>
        else 
            return <Image source={require('../../../assets/picaretamaxmodal.png')} resizeMode='contain' style={{width: width * 0.5, height: height * 0.15, bottom: height * 0.03}}/>
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
        if(nivel <= 4)
            return "Tem certeza que deseja evoluir?"
        else 
            return ""
    }

    function renderTextLEVELPICARETA() {
        function renderText02 () {
            if(nivel === 0)
                return 'picareta de ferro'
            if(nivel === 1)
                return 'picareta de ouro'
            if(nivel === 2)
                return 'picareta de diamante'
            if(nivel === 3)
                return 'picareta de esmeralda'
            if(nivel === 4)
                return 'picareta de cristal cósmico'
        }
        function renderNivel () {
            if(nivel <= 4)
                return `nível ${nivel + 2}`
        }
        if(nivel <= 4)
        return( 
        <View style={{marginHorizontal: height * 0.0007, bottom: height * 0.007}}>
            {/* Nível atual */}
            <Text transform color>{renderText02()} <Text transform color>(<Text transform color fontfamily>{renderNivel()}</Text>)</Text></Text>
            <View style={{flexDirection:'row', alignSelf:'center'}}>
                {/* Preço */}
                <View style={{flexDirection: 'row', top: height * 0.005}}>
                    <Text color transform>preço: </Text>
                    <Text color>(<Text color  fontfamily>12.500</Text> <Text transform ouro>chm</Text>)</Text>
                </View>
            </View>
            {/* Mostra o que a pessoa vai ganhar */}
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', top: height * 0.01}}>
                <Text ouro><Text ouro transform><Text  style={{color: colors.backgroundBottom}}>50</Text> CHM/</Text>clique</Text>
                <Image resizeMode='contain' source={require('../../../assets/arrowright.png')}/>
                <Text ouro><Text ouro transform><Text color transform fontfamily> 125</Text> chm/</Text>clique</Text>
            </View>
            {/* WARNING */}
            <View style={{flexDirection: 'row',  alignSelf:'center', top: height * 0.02}}>
                <Text transform><Text transform fontfamily>importante: </Text>os encantamentos atuais serão perdidos ao evoluir a picareta. pense com cuidado</Text>
            </View>
            {/* Tem certeza? */}
            <View style={{top: height * 0.03}}>
                <Text color>Tem certeza que deseja evoluir?</Text>
            </View>
        </View>
        )
    }

    function renderButton () {
        if(nivel <= 4)
            return (
            <> 
        <TouchableOpacity onPress={() => setModalPicareta(!modalPicareta)}>
            <ImageBackground source={require('../../../assets/RED.png')} style={{ width: width * 0.25, height: height * 0.05 }} imageStyle={{ borderRadius: height * 0.03 }}>
                <Text color transform>não</Text>
            </ImageBackground>
        </TouchableOpacity><TouchableOpacity onPress={() => ConfirmBuy()}>
                <ImageBackground source={require('../../../assets/GREEN.png')} style={{ width: width * 0.25, height: height * 0.05 }} imageStyle={{ borderRadius: height * 0.03 }}>
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
            setModalPicareta(!modalPicareta)
            setFunction(count - price)
            setNivel(nivel + 1)
            setNivelPicareta(nivelPicareta + 1)
        }, 500)
    }

    return( 
    <Modal visible={modalPicareta} transparent={true}>
        <View style={{height: height * 0.5, width: width * 0.9,  backgroundColor:'#242A2E', alignItems:'center', alignSelf:'center', justifyContent:'center', top: height / 5, borderRadius: height * 0.02}}>
            <TouchableOpacity onPress={() => setModalPicareta(!modalPicareta)} style={{position:'absolute', backgroundColor:'#212526', width: 60, height: 60, borderRadius: 60, alignItems:'center', justifyContent:'center', bottom: height * 0.44, left: height * 0.37, top: height * 0.007}}>
                        <Text color>X</Text>
            </TouchableOpacity>


            {renderImage()}

            
             {renderTextLEVELPICARETA()}
            
            <View style={{flexDirection:'row', width: width / 1.5, justifyContent:'space-around', top: height * 0.04}}>

            {renderButton()}

            </View> 

        </View>    
        
    </Modal>
    )
}
