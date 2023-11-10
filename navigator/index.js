import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../screen/HomePage';
import Post from '../screen/Post';
import Profile from '../screen/Profile';
import Detail from '../screen/Detail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTab = () => (
    <Tab.Navigator>
        <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Detail" component={Detail} />
    </Tab.Navigator>
)


const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={BottomTab} options={{ headerShown: false }} />
        <Stack.Screen name="Post" component={Post} options={{ headerShown: true }} />
        <Stack.Screen name="Detail" component={Detail} options={{ headerShown: true }} />
    </Stack.Navigator>
)


const Navigator = () => (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
)
export default Navigator

