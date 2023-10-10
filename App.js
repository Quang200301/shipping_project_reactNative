import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ViewItem from './screen/home/ViewItem';
import Home from './screen/home/Home';
import { FontAwesome } from "@expo/vector-icons";
import Menu from './screen/home/Menu';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const BottomTab=()=>{
    return(
      <Tab.Navigator 
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            labelStyle: {
              color: "red",
              fontSize: 30,
            }
          },
          tabBarActiveTintColor: "red",
        }}
      >
        <Tab.Screen name="home" component={Home}
          options={{
            
            tabBarLabel: "Home",
            tabBarIcon: ({color}) => <FontAwesome name='home' size={30} color={color}/>,
          }}
        />
        <Tab.Screen name="menu" component={Menu}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({color}) => <FontAwesome name='user' size={30} color={color}  />,
          }}
        />
         <Tab.Screen name="user" component={Home}
          options={{
            
            tabBarLabel: "Home",
            tabBarIcon: ({color}) => <FontAwesome name='shopping-cart' size={30} color={color} />,
          }}
        />
        <Tab.Screen name="message" component={Menu}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({color}) => <FontAwesome name='comment' size={30} color={color} />,
          }}
        />
      </Tab.Navigator> 
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='home' component={BottomTab}/>
        <Stack.Screen name="viewitem" component={ViewItem} />
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}
