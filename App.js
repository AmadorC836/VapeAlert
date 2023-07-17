// imports home from pages/Home
import Preview from './pages/Restroom'
import Home from './pages/Home'
import AlertScreen from './pages/AlertScreen'
import{ createNativeStackNavigator } from '@react-navigation/native-stack'
import{createBottomTabNavigator} from '@react-navigation/bottom-tabs'
const Tabs = createBottomTabNavigator()
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image } from  'react-native';

export default function App() {
  return (
    // Container for the navigation bar 
    <NavigationContainer>
      {/* <Image source = {require('./assets/VapeAlert.png')} style ={styles.logo}/> */}
      {/* Adds Home at the bottom of tab and allows you to click it to enter Home page */}
      <Tabs.Navigator>
        {/* <Tabs.Screen name = "Home" component={Home}/> */}
        <Tabs.Screen name = "AlertScreen" component={AlertScreen}/>
        <Tabs.Screen name = "Restroom" component={Preview}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

