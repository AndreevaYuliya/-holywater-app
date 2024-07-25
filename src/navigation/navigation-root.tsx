import React from 'react'

import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ReaderScreen from '../screens/reader-screen'

import { BottomTabNavigator } from './components'

const Stack = createStackNavigator()

const NavigationRoot = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle='dark-content' />

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={BottomTabNavigator} />
        <Stack.Screen name='Reader' component={ReaderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationRoot
