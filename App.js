import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
// import Message from "./screen/chat/Messagex";
import Vourcher from "./screen/Vourchers/Vourcher";
import Notification from "./screen/Notifications/Notification";
const App = () => {
  return (
    <SafeAreaView>
      {/* <Vourcher /> */}
      {/* <Message/> */}
      <Notification/>
    </SafeAreaView>
  );
};
export default App;
