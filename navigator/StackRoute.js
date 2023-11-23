import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

// Bottom tabs -----------------------
import BottomTab from './BottomRoute';
// End Bottom tabs ---------------------------


// Stacks -------------------------------------
import SignUp from '../components/Login/SignUp';
import SignIn from '../components/Login/SignIn';
import ViewItem from '../screen/home/ViewItem';
import Message from '../screen/chat/Messagex';
import ChatDetail from '../screen/chat/ChatDetails';
import CallRinging from '../screen/chat/CallRinging';
import Call from '../screen/chat/Call';
import SearchPage from '../screen/home/SearchPage';
import DetailPage from '../screen/home/DetailPage';
import DetailProduct from '../screen/home/DetailProduct';
import Map from '../screen/map/Map';

// Tai ----------------------------------
import ConfirmOrder from '../screen/Confirmorder/confirm'

// End stacks ------------------------------------------------

const Stack = createStackNavigator();

const stackRoute = [
    {
        stackName: 'signup',
        component: SignUp,
    },
    {
        stackName: 'signin',
        component: SignIn,
    },

    {
        stackName: 'home',
        component: BottomTab,
    },
    {
        stackName: 'allview',
        component: ViewItem,
    },
    {
        stackName: 'message',
        component: Message,
    },
    {
        stackName: 'chatDetail',
        component: ChatDetail,
    },
    {
        stackName: 'callRinging',
        component: CallRinging,
    },
    {
        stackName: 'call',
        component: Call,
    },
    {
        stackName: 'searchs',
        component: SearchPage,
    },
    {
        stackName: 'detailpage',
        component: DetailPage,
    },
    {
        stackName: 'Test',
        component: DetailPage,
    },
    {
        stackName: 'detailpro',
        component: DetailProduct,
    },
    {
        stackName: 'confirmOrder',
        component: ConfirmOrder,
    },
    {
        stackName: 'Map',
        component: Map,
    },
];

export default function StackRoute() {
    return (
        <Stack.Navigator
            initialRouteName='home'
        >   
            {
                stackRoute.map(
                    (route, index) => <Stack.Screen key={index} name={route.stackName} component={route.component} options={{ headerShown: false }} />
                )
            }
        </Stack.Navigator>
    )
}
