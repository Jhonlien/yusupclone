import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Provider, useSelector} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Videoplayer from './src/screens/Videoplayer';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';
import Notification from './src/screens/Notification';
import Library from './src/screens/Library';
import Button from './src/components/Button';

import {reducer} from './src/reducers/reducer';
import {themeReducers} from './src/reducers/themeReducers';
import {switchReducers} from './src/reducers/switchReducers';



const customDarkTheme =  {
  ...DarkTheme,
  colors : {
    ...DarkTheme.colors,
    headerColor : '#404040',
    logoTextColor : 'white',
    icons : 'white'
  }
}

const customDefaultTheme =  {
  ...DefaultTheme,
  colors : {
    ...DefaultTheme.colors,
    headerColor : 'white',
    logoTextColor: "black",
    icons :"grey"
  }
}

const stack = createStackNavigator()
const tabs = createBottomTabNavigator();

const rootReducers = combineReducers({
  cardData:reducer,         //return []
  myDarMode:themeReducers,  //return  false
  switchDark:switchReducers // return false
})
const store = createStore(rootReducers);


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
            } 
            else if (route.name == 'Subscribe'){
              return <Button/>  
            }
            else if (route.name == 'Notifications'){
              iconName = focused ? 'notifications' : 'notifications';
              // colorName = focused ? '#c0392b' : '#bdc3c7'
            }
            else if (route.name == 'Library'){
              iconName = focused ? 'library-add' : 'library-add';
              // colorName = focused ? '#c0392b' : '#bdc3c7'
            }
            return <MaterialIcon name={iconName} size={20} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#c0392b',
          inactiveTintColor: '#bdc3c7',
          showLabel:false
        }}
        
    >
      <tabs.Screen name="Home" component={Home}/>
      <tabs.Screen name="Explore" component={Explore}/>
      <tabs.Screen 
        name="Subscribe"
        component={Subscribe} 
      />
      <tabs.Screen name="Notifications" component={Notification}/>
      <tabs.Screen name="Library" component={Library}/>
    </tabs.Navigator>
  )
}

export default function App(){
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  )
}

function Navigation() {
  const themeMode = useSelector(state => state.myDarMode)
  return (
    <NavigationContainer theme={themeMode ? customDarkTheme : customDefaultTheme}>
      <stack.Navigator headerMode="none">
        <stack.Screen name="rootHome" component={rootHome} />
        <stack.Screen name="Search" component={Search} />
        <stack.Screen name="Videoplayer" component={Videoplayer} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

// export default App

const styles = StyleSheet.create({})
