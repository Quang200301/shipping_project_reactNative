import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
const Detail = ({ navigation }) =>
(
  <View style={{  backgroundImage: `url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width:'100%'  }}>
    <Text style={{ fontSize: 50, padding: 30 }}>Detail</Text>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={{ width: 45, height: 45, fontSize: 16, padding: '30px', color: 'white', backgroundColor: 'black' }}>Back</Text>
    </TouchableOpacity>
  </View>
)
export default Detail

const styles = StyleSheet.create({})