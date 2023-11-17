import Home from '../screen/HomePage'
import Profile from '../screen/Profile'
import Buy from '../screen/Buy'
import Chat from '../screen/Chat'

export default bottomRoutes = [

    {
        tabName: 'HomeBottom',
        component: Home,
        iconLabel: 'Home',
        icon: require('../assets/icons/icon_bottom_tab/Home.png'),
    },
    {
        tabName: 'Profile',
        component: Profile,
        iconLabel: 'Profile',
        icon: require('../assets/icons/icon_bottom_tab/Profile.png'),
    },
    {
        tabName: 'Buy',
        component: Buy,
        iconLabel: 'Buy',
        icon: require('../assets/icons/icon_bottom_tab/Buy.png'),
    },
    {
        tabName: 'Chat',
        component: Chat,
        iconLabel: 'Chat',
        icon: require('../assets/icons/icon_bottom_tab/Chat.png'),
    },
]