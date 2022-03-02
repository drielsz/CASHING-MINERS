import React from 'react';
import {Image, Dimensions} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from '../styles/colors';
// Screens
import Home from '../pages/Home';
import Perfil from '../pages/Perfil'
import AppRoutes from './app.routes';
import Withdraw from '../pages/Withdraw'
// Images
import Profile from '../assets/profile.png';
import Cashing from '../assets/Cashing.png';
import WithdrawImage from '../assets/withdraw.png';
// Icons
import { Entypo, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();

export default function BottomNavigation ({}) {
    return(
        <Tab.Navigator             
        screenOptions={{
            tabBarStyle:{
                backgroundColor: colors.backgroundLogin,
                borderTopColor: colors.transparent,
                paddingBottom: height * 0.005,
                paddingTop: height * 0.007,
                height: width * 0.12,
            }
        }}
        tabBarOptions={{
            activeTintColor: colors.lineLogin,
            inactiveTintColor: colors.textLogin,
        }}
        >
            <Tab.Screen name='CASHING' component={Home} options={{headerShown: false, tabBarIcon: ({size, color}) => (
                <Image source={Cashing} style={{width: size, height: size, tintColor: color}}/>
            )}}/>
            <Tab.Screen name='SAQUE' component={Withdraw} options={{headerShown: false, tabBarIcon: ({size, color}) => (
                <Image source={WithdrawImage} style={{width: size, height: size, tintColor:color}}/>
            )}} />
            <Tab.Screen name='PERFIL' component={Perfil} options={{headerShown: false, tabBarIcon: ({size, color}) => (
                <Image source={Profile} style={{width: size, height: size, tintColor: color}}/>
            )}}/>
        </Tab.Navigator>
    )
}