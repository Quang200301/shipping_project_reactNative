
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Message from "./screen/chat/Messagex";
const App = () => {
  return (
    <SafeAreaView>
      <Message/>
    </SafeAreaView>
  );
};
export default App;
