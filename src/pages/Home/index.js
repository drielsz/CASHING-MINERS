import React, {useState, useEffect, useRef} from 'react'
import {View, Dimensions, Platform, Alert} from 'react-native'
// Estilos
import {SafeAreaView, Text, Header, SupportToInventory, Image}  from '../../styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {styles} from '../../styles'
// Dimensões
var width = Dimensions.get('window').width
var height = Dimensions.get('window').height
// Cores utilizadas
import { colors } from '../../styles/colors'
// Picaretas
import {Details, Enchataments} from '../../components'
// Modal
import {ModalComponent} from '../../components/Modal'
import {ModalPicareta} from '../../components/Modal/ModalPicareta'
// Ad
import {Banner} from '../../components/Ad/Banner'
// Async Storage (COUNT)
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useAuth} from '../../contexts/auth'
const Home = ({}) => {
    const {quantCHM, setQuantCHM} = useAuth()
    const [ count, setCount ] = useState(0) 
    const [ restante, setRestante ] = useState(50)
    const [ price, setPrice ] = useState(1000)
    const [ enchamentPrice, setEnchamentPrice ] = useState(5000)
    const [ modalVisible, setModalVisible ] = useState(false)
    const [ modalPicareta, setModalPicareta ] = useState(false)
    const [ nivel, setNivel ] = useState(0)
    const [ nivelPicareta, setNivelPicareta ] = useState(0)

    
    function renderPicareta  () {
        if(nivelPicareta === 0)
        return <>
        <Image source={require('../../assets/picareta.png')} style={{width: width * 0.9, height: height * 0.1}} resizeMode='contain'/>
        </>
        
        if(nivelPicareta === 1)
        return (
            <>
          <Image source={require('../../assets/picaretaferro01.png')} style={{width: width * 0.9, height: height * 0.1}} resizeMode='contain'/>
            </>
        )
        if(nivelPicareta === 2)
        return (
            <>
            <Image source={require('../../assets/picaretaouro01.png')} style={{width: width * 0.9, height: height * 0.1}} resizeMode='contain'/>
            </>
        )
        if(nivelPicareta === 3)
        return (
            <>
            <Image source={require('../../assets/picaretadiamante01.png')} style={{width: width * 0.9, height: height * 0.1}} resizeMode='contain'/>
            </>
        )
        if(nivelPicareta === 4)
        return (
            <>
            <Image source={require('../../assets/picaretaesmeralda01.png')} style={{width: width * 0.9, height: height * 0.1}} resizeMode='contain'/>
            </>
        )
        if(nivelPicareta === 5)
        return (
            <>
            <Image source={require('../../assets/picaretamax01.png')} style={{width: width * 0.9, height: height * 0.1}} resizeMode='contain'/>
            </>
        )
        if(nivelPicareta === 6)
        return (
            <>
            <Image source={require('../../assets/picareta.png')} style={{width: width * 0.9, height: height * 0.1}} resizeMode='contain'/>
            </>
        )
        else null
      }

    function renderPolygon () {
      if(nivel === 0)
      return <>
      <Image source={require('../../assets/FirstPolygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/>
      <Image source={require('../../assets/Polygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/>
      <Image source={require('../../assets/Polygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/>
      <Image source={require('../../assets/Polygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/>
      <Image source={require('../../assets/Polygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/>
      </>
      
      if(nivel === 1)
      return (
          <>
          <Image source={require('../../assets/FirstPolygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/> 
          <Image source={require('../../assets/FirstPolygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/>
          <Image source={require('../../assets/Polygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/>
          <Image source={require('../../assets/Polygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/>
          <Image source={require('../../assets/Polygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/>
          </>
      )
      if(nivel === 2)
      return (
          <>
          <Image source={require('../../assets/FirstPolygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/> 
          <Image source={require('../../assets/FirstPolygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/>
          <Image source={require('../../assets/FirstPolygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/>
          <Image source={require('../../assets/Polygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/>
          <Image source={require('../../assets/Polygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/>
          </>
      )
      if(nivel === 3)
      return (
          <>
          <Image source={require('../../assets/FirstPolygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/> 
          <Image source={require('../../assets/FirstPolygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/>
          <Image source={require('../../assets/FirstPolygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/>
          <Image source={require('../../assets/FirstPolygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/>
          <Image source={require('../../assets/Polygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/>
          </>
      )
      if(nivel === 4)
      return (
          <>
          <Image source={require('../../assets/FirstPolygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/> 
          <Image source={require('../../assets/FirstPolygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/>
          <Image source={require('../../assets/FirstPolygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/>
          <Image source={require('../../assets/FirstPolygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/>
          <Image source={require('../../assets/FirstPolygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/>
          </>
      )
      else <Image source={require('../../assets/Polygon.png')} style={{width: height * 0.03, height: height * 0.03, top: height * 0.008}} resizeMode='contain'/>
    }

    async function saveData () {
        await AsyncStorage.setItem("@DZ_8D", JSON.stringify(quantCHM +1))
    }


    async function showData() {
        const json = await AsyncStorage.getItem("@DZ_8D")
        const valorcount = JSON.parse(json)
    }

    return(
        <SafeAreaView align>
            <View style={{ bottom: height * 0.06, alignItems: 'center' }}>
                <Header style={{ top: height * 0.07 }}>

                    <SupportToInventory>
                        <Text color transform>inventário</Text>

                    </SupportToInventory>
                    <SupportToInventory>
                        {/* VALOR DE QUANTO CHM O USUARIO TEM */}
                        <Text transform color>{quantCHM}<Text transform ouro> chm</Text></Text>
                    </SupportToInventory>
                </Header>
                <View style={{ alignItems: 'center', justifyContent: 'center', top: height * 0.1 }}>
                    <Text transform color>cliques restantes:<Text ouro transform>{restante}{restante == 0 ? <Text transform> {restante}</Text> : null}</Text></Text>
                    {restante <= 0 ? <Text transform>mais cliques em:<Text></Text></Text> : null}
                </View>

                {/* Picareta */}
                <TouchableOpacity onPress={() => setQuantCHM(quantCHM + 1, setRestante(restante - 1), showData())} style={styles.viewPicareta}>
                    {renderPicareta()}
                </TouchableOpacity>

                <Text color transform style={{ top: height * 0.19 }}>chm por clique:<Text transform ouro> 115<Text color> (<Text style={{ color: colors.verdeTurquesa }}>100</Text><Text style={{ color: colors.encantamento }}> + 15<Text color>)</Text></Text></Text></Text></Text>

                <Header style={{ top: height * 0.04 }} width={width / 1.05}>
                    <SupportToInventory style={{ top: height * 0.2 }} width={height * 0.23} height={height * 0.11}>
                        {quantCHM < price ?
                            <TouchableOpacity disabled={true}>
                                <Text transform>evoluir picareta
                                    <Text transform>{"\n"}{price}
                                        <Text transform> chm</Text>
                                    </Text></Text>
                            </TouchableOpacity> :
                            <TouchableOpacity disabled={false} onPress={() => setModalPicareta(true)}>
                                <Text transform color>evoluir picareta
                                    <Text color transform>{"\n"}{price}
                                        <Text ouro transform> chm</Text>
                                    </Text></Text>
                            </TouchableOpacity>}
                    </SupportToInventory>

                    <SupportToInventory width={height * 0.23} height={height * 0.11} style={{ top: height * 0.2 }}>
                        {quantCHM < enchamentPrice ?
                            <TouchableOpacity disabled={true}>
                                <Text transform>encantar<Text>{"\n"}preço: {enchamentPrice}<Text transform> chm</Text></Text></Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity disabled={false} onPress={() => setModalVisible(true)}>
                                <Text style={{ color: colors.encantamento }} transform>encantar<Text color={colors.textLogin}>{"\n"}preço: {enchamentPrice}<Text transform ouro> chm</Text></Text></Text>
                            </TouchableOpacity>}
                    </SupportToInventory>

                </Header>

                <Text transform color style={{ top: height * 0.28, textAlign: 'center' }}>Picareta Atual<Text style={{ color: colors.verdeTurquesa }}
                    transform>{"\n"}esmeralda(lv. max)</Text></Text>

                <View style={{ flexDirection: 'row' }}>
                    {Details.map((item, index) => (
                        <View key={index} style={{ top: height * 0.3, marginHorizontal: height * 0.003 }}>
                            <Image resizeMode='contain' source={item.image} style={{ width: height * 0.03, height: height * 0.03 }} />
                        </View>
                    ))}
                </View>
                <View style={{ top: height * 0.31, alignItems: 'center' }}>
                    <Text transform color>encantamento atual</Text>
                    <View style={{ flexDirection: 'row' }}>
                        {renderPolygon()}
                    </View>
                </View>
            </View>
            <ModalComponent
                display={modalVisible} undisplay={setModalVisible}
                count1={quantCHM} price1={price} setFunction={setCount} nivel={nivel}
                setNivel={setNivel} />
            <ModalPicareta
                setModalPicareta={setModalPicareta}
                modalPicareta={modalPicareta}
                count={quantCHM} price={price} setFunction={setCount}
                setNivelPicareta={setNivelPicareta} nivelPicareta={nivelPicareta} />
            <View style={{ position: 'absolute', bottom: 0 }}>
                <Banner />
            </View>
        </SafeAreaView>
           
    )
}


export default Home
