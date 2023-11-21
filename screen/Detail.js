import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';

const Detail = ({ route, navigation }) => {
  const a = 10;
  route.params.reSetParentNumber(a);
  return (
    <View >
      <Text style={{ fontSize: 50, padding: 30 }}>Detail</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{ width: 45, height: 45, fontSize: 16, padding: '30px', color: 'white', backgroundColor: 'black' }}>Back</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Detail

const styles = StyleSheet.create({})