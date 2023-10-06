
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Message from "./screen/chat/Messagex";
import ChatDetail from "./screen/chat/ChatDetails";
const App = () => {
  return (
    <SafeAreaView>
      {/* <Message/> */}
      <ChatDetail />
    </SafeAreaView>
  );
};
export default App;
