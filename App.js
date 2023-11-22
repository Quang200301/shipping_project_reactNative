// import Navigator from './navigator/NavIndex';

//Phần của tài ----------------------
import Vourcher from "./screen/Vourchers/Vourcher";
import Notification from "./screen/Notifications/Notification";
import Payment from "./screen/Payments/Payment"
import Confirmorder from './screen/Confirmorder/confirm'
import Shipping from './screen/Shippings/Sipping'
import Profile from "./screen/Profiles/Profile";

// Xong phần của tài -----------------------------

import React from 'react';
// import Navigator from './navigation/Navigator';
import Navigator from './navigator/NavIndex';
import { Provider } from 'react-redux';
import store from './components/app/store';
import { SafeAreaView } from 'react-native';
export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>

  )
}


