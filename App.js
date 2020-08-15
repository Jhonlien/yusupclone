import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Videoplayer from './src/screens/Videoplayer';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe'


const stack = createStackNavigator()
const tabs = createBottomTabNavigator();
const rootHome = () => {
  return (
    <tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let colorName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
              // colorName = focused ? '#c0392b' : '#bdc3c7'
            } else if (route.name === 'Explore') {
              iconName = focused ? 'explore' : 'explore';
              // colorName = focused ? '#c0392b' : '#bdc3c7'
            } else if (route.name == 'Subscribe'){
              iconName = focused ? 'subscriptions' : 'subscriptions';
              // colorName = focused ? '#c0392b' : '#bdc3c7'
            }
            return <MaterialIcon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#c0392b',
          inactiveTintColor: '#bdc3c7',
        }}
    >
      <tabs.Screen name="Home" component={Home}/>
      <tabs.Screen name="Explore" component={Explore}/>
      <tabs.Screen name="Subscribe" component={Subscribe}/>
    </tabs.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator headerMode="none">
        <stack.Screen name="rootHome" component={rootHome} />
        <stack.Screen name="Search" component={Search} />
        <stack.Screen name="Videoplayer" component={Videoplayer} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
