import React, { useState } from 'react'
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, Text, View } from 'react-native';
import Home from '../screen/HomePage';
import Post from '../screen/Post';
import Detail from '../screen/Detail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();




const BottomTab = () => {
    const [isFocus, setIsFocus] = useState(false);
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: true,
                tabBarShowLabel: false,
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
                    ...styles.shadow,
                    borderColor: 'none'
                }
            }}
        >
            <Tab.Screen
                name="HomeBottom"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={focused ? { ...styles.tabBarDisplayInFocus } : { ...styles.tabBarDisplayUnFocus }}
                        >
                            <Image source={require('../assets/icons/icon_bottom_tab/Home.png')} resizeMode='contain' />
                            <Text style={focused ? { fontSize: 12, color: '#6B50F6', fontWeight: 700 } : { display: 'none' }}>Home</Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="ProfileBottom"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={focused ? { ...styles.tabBarDisplayInFocus } : { ...styles.tabBarDisplayUnFocus }}
                        >
                            <Image source={require('../assets/icons/icon_bottom_tab/Profile.png')} resizeMode='contain' />
                            <Text style={focused ? { fontSize: 12, color: '#6B50F6', fontWeight: 700 } : { display: 'none' }}>Profile</Text>
                        </View>
                    )
                }}

            />

            <Tab.Screen
                name="OrderBottom"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={focused ? { ...styles.tabBarDisplayInFocus } : { ...styles.tabBarDisplayUnFocus }}
                        >
                            <Image source={require('../assets/icons/icon_bottom_tab/Buy.png')} resizeMode='contain' />
                            <Text style={focused ? { fontSize: 12, color: '#6B50F6', fontWeight: 700 } : { display: 'none' }}>Order</Text>
                        </View>
                    ),
                    tabBarBadge:  3,
                    tabBarBadgeStyle:{top:20,borderWidth:2, borderColor:'white',elevation:4}
                }}
            />
            <Tab.Screen
                name="ChatBottom"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={focused ? { ...styles.tabBarDisplayInFocus} : { ...styles.tabBarDisplayUnFocus }}
                        >
                            <Image source={require('../assets/icons/icon_bottom_tab/Chat.png')} resizeMode='contain' />
                            <Text style={focused ? { fontSize: 12, color: '#6B50F6', fontWeight: 700 } : { display: 'none' }}>Chat</Text>
                        </View>
                    )
                }}

            />
        </Tab.Navigator>
    )
}




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
    tabBarDisplayInFocus: {
        backgroundColor: '#F0EEFE',
        padding: 15, 
        paddingHorizontal: 20, 
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 10,
    }
})