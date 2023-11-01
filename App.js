import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
// import Message from "./screen/chat/Messagex";
import Vourcher from "./screen/Vourchers/Vourcher";
import Notification from "./screen/Notifications/Notification";
import Payment from "./screen/Payments/Payment"
import Confirmorder from './screen/Confirmorder/confirm'
import Shipping from './screen/Shippings/Sipping'
const App = () => {
  return (
    <SafeAreaView>
      {/* <Vourcher /> */}
      {/* <Message/> */}
      {/* <Notification/> */}
      {/* <Payment/> */}
      {/* <Confirmorder/> */}
       <Shipping/>
    </SafeAreaView>
  );
};
export default App;
