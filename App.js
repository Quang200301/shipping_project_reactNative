
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import ConfirmOrder from "./screen/order/ConfirmOrder";
import OrderDetail from "./screen/order/OrderDetails";
const App = () => {
  return (
    <SafeAreaView>
      <OrderDetail />
      {/* <ConfirmOrder /> */}
    </SafeAreaView>
  );
};
export default App;
