import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {StatusBar} from 'expo-status-bar'
// 
import Routes from './routes/index'
import {AuthProvider} from './contexts/auth'

export default function StackNavigator() {
    return(
      <NavigationContainer>
        <AuthProvider>
          <StatusBar style='light'/>
          <Routes/>
        </AuthProvider>
    </NavigationContainer>
    ) 
}

