import React from 'react'
import Home from '../screen/HomePage'
import Profile from '../screen/Profile'
import Buy from '../screen/Buy'
import Chat from '../screen/Chat'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

const bottomRoutes = [
    {
        tabName: 'HomeBottom',
        component: Home,
        iconLabel: 'Home',
        icon: require('../assets/icons/icon_bottom_tab/Home.png'),
    },
    {
        tabName: 'ProfileBottom',
        component: Profile,
        iconLabel: 'Profile',
        icon: require('../assets/icons/icon_bottom_tab/Profile.png'),
    },
    {
        tabName: 'BuyBottom',
        component: Buy,
        iconLabel: 'Buy',
        icon: require('../assets/icons/icon_bottom_tab/Buy.png'),
    },
    {
        tabName: 'ChatBottom',
        component: Chat,
        iconLabel: 'Chat',
        icon: require('../assets/icons/icon_bottom_tab/Chat.png'),
    },
]

export default function BottomRoute() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: true,
                tabBarShowLabel: false,
                tabBarStyle: { ...styles.tabBarStyle, ...styles.shadow }
            }}
        >
            {bottomRoutes.map((route, index) => (
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
        paddingHorizontal: 30,
        borderRadius: 26,
        height: 90,
        borderColor: 'none'
    },
    tabBarDisplayInFocus: {
        backgroundColor: '#F0EEFE',
        paddingVertical:15,
        paddingHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width:'130%',
        columnGap:10
    },
    iconLabel: {
        color: '#6B50F6',
    },
    iconBottomTab: {
        width: 25,
        height: 25
    }
})