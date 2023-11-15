import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
// import Message from "./screen/chat/Messagex";
import Vourcher from "./screen/Vourchers/Vourcher";
import Notification from "./screen/Notifications/Notification";
import Payment from "./screen/Payments/Payment"
import Confirmorder from './screen/Confirmorder/confirm'
import Shipping from './screen/Shippings/Sipping'
import Profile from "./screen/Profiles/Profile";
// import DemoProfile from './screen/Profiles/Demoprofile'
const App = () => {
  return (
    <SafeAreaView>
      {/* <Vourcher /> */}
      {/* <Message/> */}
      {/* <Notification/> */}
      {/* <Payment/> */}
     <Profile/>
       {/* <Shipping/> */}
       {/* <DemoProfile></DemoProfile> */}
    </SafeAreaView>
  );
};
export default App;
