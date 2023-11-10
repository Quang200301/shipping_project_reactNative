import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigator';
import Detail from './screen/Detail';
export default function App() {
  return (
    // console.log(<Detail />)
    <Navigator />
    // <Detail />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
