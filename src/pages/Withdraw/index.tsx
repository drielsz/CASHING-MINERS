import React, {useEffect, useState} from 'react';
import { Dimensions, Image, View, ScrollView, TouchableOpacity } from 'react-native';
// Autenticação: Pegar dados
import { useAuth } from '../../contexts/auth';
// Cores
import { colors } from '../../styles/colors'
// Estilos
import { SafeAreaView, Text, SupportToInventory, Header } from '../../styles'
// Dimensions
var width = Dimensions.get("window").width
var height = Dimensions.get("window").height
// Ad
import {Banner} from '../../components/Ad/Banner';
// Components
// Async Storage (COUNT)
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Payment, PaymentPaypal} from '../../components/PaymentBackground';

const Withdraw: React.FC = ({}) => {
   const [value, setValue] = useState(0)

   const {user, signOut, quantCHM} = useAuth();
   function handleSignOut () {
       signOut()
   }


   return (
       <SafeAreaView bg={colors.backgroundLogin} align>
           <Banner/>

           <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1,}} removeClippedSubviews={true}>

            <Header style={{top: height * 0.07, justifyContent:'center'}}>
                <SupportToInventory>
                    <Text  color transform>realizar saque</Text>
                </SupportToInventory>
                <SupportToInventory bg height={height * 0.08} width={width * 0.4}>
                    <Text transform color >saldo atual</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text fontfamily color>{quantCHM}</Text>
                        <Text ouro transform> CHM</Text>
                    </View>
                </SupportToInventory>
            </Header>

               <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Payment />
                    <PaymentPaypal />
               </View>
                 <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Payment />
                    <PaymentPaypal />
               </View>
               <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Payment />
                    <PaymentPaypal />
               </View>
               <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Payment />
                    <PaymentPaypal />
               </View>

               <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <View style={{width: width * 0.2, height: height * 0.2, backgroundColor:'transparent'}}/>
                    <View style={{width: width * 0.2, height: height * 0.2, backgroundColor:'transparent'}}/>
               </View>
           </ScrollView>


           <View style={{position:'absolute', bottom:0}}>
              <Banner/>
           </View>
       </SafeAreaView>
   )
};

export default Withdraw;