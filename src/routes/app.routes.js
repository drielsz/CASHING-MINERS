// Paginas que depois o login for concluido
import React from 'react'
import BottomNavigation from './bottom.routes'

import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

const AppRoutes = React.FC = () => (
    <AppStack.Navigator>
        <AppStack.Screen name='Home' component={BottomNavigation} options={{headerShown: false}}/>
    </AppStack.Navigator>
) 

export default AppRoutes