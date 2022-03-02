import React from 'react';
import {ScrollView, View, Image, Dimensions, TouchableOpacity} from 'react-native'
import { Text, SupportToInventory } from '../../styles';
import ButtonWithdraw from '../ButtonWithdraw';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
// cores
import { colors } from '../../styles/colors'
// Imagens
import Pix from '../../assets/pix.png'
import Paypal from '../../assets/paypal.png'
export const Payment = ({}) => {
    return (
       <View style={{top: height * 0.15, margin: '5%'}}>
           <View style={{width: width * 0.43, height: height * 0.3, backgroundColor: colors.backgroundBottom, borderRadius: 18, alignItems:'center'}}>
               <Image source={Pix} resizeMode='contain' style={{top: height * 0.01}}/>
               <View style={{top: height * 0.08}}>
                <Text ouro transform><Text color fontfamily>25.000</Text> chm</Text>
                <Text color transform fontfamily><Text color>R$</Text>25,00</Text>
                <View style={{bottom: height * 0.018}}>
                    <ButtonWithdraw />
                </View>
               </View>
           </View>
       </View>

    )
}
export const PaymentPaypal = () => {
    return (
        <View style={{top: height * 0.15, margin: '5%'}}>
        <View style={{width: width * 0.43, height: height * 0.3, backgroundColor: colors.backgroundBottom, borderRadius: 18, alignItems:'center'}}>
            <Image source={Paypal} resizeMode='contain' style={{bottom: height * 0.01}}/>
            <View style={{top: height * 0.033}}>
             <Text ouro transform><Text color fontfamily>25.000</Text> chm</Text>
             <Text color transform fontfamily><Text color>R$</Text>25,00</Text>
            </View>

             <View style={{top: height * 0.012}}>  
                <ButtonWithdraw/>
             </View>
            
        </View>
    </View>

    )
}
