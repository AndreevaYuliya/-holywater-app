import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import LibraryScreen from '../../../screens/library-screen'
import DiscoverScreen from '../../../screens/discover-screen'
import RewardsScreen from '../../../screens/rewards-screen'
import ProfileScreen from '../../../screens/profile-screen'

import { BottomTabBar } from './components'

const BottomTab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Discover'
        tabBar={(props) => <BottomTabBar {...props} />}
    >
        <BottomTab.Screen name='Library' component={LibraryScreen} />
        <BottomTab.Screen name='Discover' component={DiscoverScreen} />
        <BottomTab.Screen name='Rewards' component={RewardsScreen} />
        <BottomTab.Screen name='Profile' component={ProfileScreen} />
    </BottomTab.Navigator>
  )
}

export default BottomTabNavigator
