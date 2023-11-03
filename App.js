import React from 'react';
import Navigator from './navigation/Navigator';
import { Provider } from 'react-redux';
import store from './components/app/store';
export default function App() {
  return (
    <Provider store={store}>
        <Navigator/>
    </Provider>
   
  )
}


// =======
// import React from "react";
// import { SafeAreaView, Text, View } from "react-native";
// import { StatusBar } from "expo-status-bar";
// // import Message from "./screen/chat/Messagex";
// import Vourcher from "./screen/Vourchers/Vourcher";
// import Notification from "./screen/Notifications/Notification";
// import Payment from "./screen/Payments/Payment"
// import Confirmorder from './screen/Confirmorder/confirm'
// import Shipping from './screen/Shippings/Sipping'
// const App = () => {
//   return (
//     <SafeAreaView>
//       {/* <Vourcher /> */}
//       {/* <Message/> */}
//       {/* <Notification/> */}
//       {/* <Payment/> */}
//       {/* <Confirmorder/> */}
//        <Shipping/>
//     </SafeAreaView>
//   );
// };
// export default App;
// >>>>>>> 3e2f8c09f51dff1dbe165120777579b411169918
