import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
const Home = ({ navigation }) =>
(
  <View style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100%' }}>
    <Text style={{ fontSize: 50, padding: 30 }}>Home</Text>
    <TouchableOpacity onPress={() => navigation.navigate('detail')}>
      <Text style={{ width: 45, height: 45, fontSize: 16, padding: '30px', color: 'white', backgroundColor: 'black' }}>Back</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Post')}>
      <Text style={{ padding: 15, backgroundColor: 'red', textAlign: 'center' }}> Your Post</Text>
    </TouchableOpacity>
  </View>
)
export default Home

const styles = StyleSheet.create({})

