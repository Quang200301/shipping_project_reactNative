import React, { useState } from 'react'
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, Text, View } from 'react-native';
import bottomRoutes from '../navigator/TabBottom';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: true,
                tabBarShowLabel: false,
                tabBarStyle: { ...styles.tabBarStyle, ...styles.shadow }
            }}
        >
            {bottomRoutes.map((route,index) => (
                <Tab.Screen
                key={index}
                    name={route.tabName}
                    component={route.component}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={focused ? { ...styles.tabBarDisplayInFocus } : { ...styles.tabBarDisplayUnFocus }}
                            >
                                <Image source={route.icon} resizeMode='contain' style={styles.iconBottomTab} />
                                <Text style={focused ? styles.iconLabel : styles.displayNone}>{route.iconLabel}</Text>
                            </View>
                        )
                    }}
                />
            ))}
        </Tab.Navigator>
    )
}




const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="HomeStack" component={BottomTab} options={{ headerShown: false }} />
    </Stack.Navigator>
)

const Navigator = () => (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
)
export default Navigator

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7f5df0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    displayNone: {
        display: 'none'
    },

    tabBarStyle: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        borderRadius: 26,
        height: 90,
        borderColor: 'none'
    },
    tabBarDisplayInFocus: {
        backgroundColor: '#F0EEFE',
        padding: 13,
        paddingHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        columnGap: 10,
        width:100
    },
    iconLabel: {
        color: '#6B50F6',
    },
    iconBottomTab:{
        width:25,
        height:25
    }
})