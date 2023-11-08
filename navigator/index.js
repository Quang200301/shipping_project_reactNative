import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../screen/home';
import Post from '../screen/Post';
import Profile from '../screen/Profile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTab = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}
            options={{
                headerShown: false,
                title: "This is Home"
            }} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Post" component={Post} />
    </Tab.Navigator>
)

const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="HomeStack" component={BottomTab} options={{ headerShown: false }} />
        <Stack.Screen name="Post" component={Post} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
)


const Navigator = () => (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
)
export default Navigator

