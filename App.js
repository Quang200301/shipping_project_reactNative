// import Navigator from './navigator/NavIndex';

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


