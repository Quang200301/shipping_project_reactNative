
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Message from "./screen/chat/Messagex";
import ChatDetail from "./screen/chat/ChatDetails";
import CallRinging from "./screen/chat/CallRinging";
import Call from "./screen/chat/Call";
const App = () => {
  return (
    <SafeAreaView>
      {/* <Message/> */}
      {/* <ChatDetail />\ */}
      {/* <CallRinging /> */}
      <Call />
    </SafeAreaView>
  );
};
export default App;
