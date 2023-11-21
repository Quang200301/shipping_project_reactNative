import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../screen/Detail';
import Post from '../screen/Post';
import Profile from '../screen/Profile';
import BottomTab from './BottomRoute';

const Stack = createStackNavigator();

const stackRoute = [
    {
        stackName: 'HomeStack',
        component: BottomTab,

    }, {
        stackName: 'DetailStack',
        component: Detail,

    },
    {
        stackName: 'PostStack',
        component: Post,

    },
    {
        stackName: 'ProfileStack',
        component: Profile,

    },

];


export default function StackRoute() {
    return (
        <Stack.Navigator>
            {
                stackRoute.map(
                    (route, index) => <Stack.Screen key={index} name={route.stackName} component={route.component} options={{ headerShown: false }} />
                )
            }
        </Stack.Navigator>
    )
}
